/**
 * Created by apple on 2017/7/16.
 */
import { diffObject } from './util/index'
import Component from './Component'

/**
 *
 * @param vnode
 */
export function renderVDOM(vnode) {
    if(typeof vnode == "string") {
        return vnode
    } else if(typeof vnode.nodeName == "string") {
        let result = {
            nodeName: vnode.nodeName,
            props: vnode.props,
            children: []
        }
        for(let i = 0; i < vnode.children.length; i++) {
            result.children.push(renderVDOM(vnode.children[i]))
        }
        return result
    } else if (typeof vnode.nodeName == "function") {
        let func = vnode.nodeName
        let inst = new func(vnode.props)
        let innerVnode = func.prototype.render.call(inst)
        return renderVDOM(innerVnode)
    }
}

export function render(vnode, parent) {
    parent.__childDomOrComp = []
    renderInBrowser(vnode, parent, null, null, 0)
}

/**
 * comp 为null的时候 就是根的时候
 * @param vnode
 * @param parent
 * @param comp
 * @param olddomOrComp
 */
export function renderInBrowser (vnode, parent, comp, olddomOrComp, meOrder) {
    console.log("vnode:", vnode, " parent:", parent, " comp:", comp, " olddomOrComp:", olddomOrComp, " meOrder:", meOrder)
    let dom
    if(typeof vnode == "string" || typeof vnode == "number") {
        if(olddomOrComp && olddomOrComp.splitText) {
            if(olddomOrComp.nodeValue !== vnode) {
                olddomOrComp.nodeValue = vnode
            }
        } else {
            if(olddomOrComp) {
                recoveryComp(olddomOrComp)
            }

            dom = document.createTextNode(vnode)
            meOrder >=0 && (parent.__childDomOrComp[meOrder] = dom)
            if(olddomOrComp) {
                parent.replaceChild(dom, olddomOrComp)
            } else {
                parent.appendChild(dom)
            }
        }
    } else if(typeof vnode.nodeName == "string") {
        if(!olddomOrComp || olddomOrComp.nodeName != vnode.nodeName.toUpperCase()) {
            createNewDom(vnode, parent, comp, olddomOrComp, meOrder)
        } else {
            diffDOM(vnode, parent, comp, olddomOrComp)
        }

    } else if (typeof vnode.nodeName == "function") {
        let func = vnode.nodeName
        let inst
        if(olddomOrComp && olddomOrComp instanceof func) {
            inst = olddomOrComp
            inst.componentWillReceiveProps && inst.componentWillReceiveProps(vnode.props)

            let shoudUpdate
            if(inst.shouldComponentUpdate) {
                shoudUpdate = inst.shouldComponentUpdate(vnode.props, olddomOrComp.state)
            } else {
                shoudUpdate = true
            }

            if(shoudUpdate) {
                inst.componentWillUpdate && inst.componentWillUpdate()
            } else {
                return // do nothing just return
            }

            //inst = olddomOrComp
        } else {
            if(olddomOrComp) {
                recoveryComp(olddomOrComp)
            }

            inst = new func(vnode.props)
            inst.componentWillMount && inst.componentWillMount()
            comp && (comp.__rendered = inst)

            meOrder >=0 && (parent.__childDomOrComp[meOrder] = inst)
        }

        let innerVnode = inst.render()
        renderInBrowser(innerVnode, parent, inst, inst.__rendered, -1)

        if(olddomOrComp && olddomOrComp instanceof func) {
            inst.componentDidUpdate && inst.componentDidUpdate()
        } else {
            inst.componentDidMount && inst.componentDidMount()
        }
    }
}

function recoveryComp(comp) {
    if(comp instanceof Component) {
        comp.componentWillUnmount && comp.componentWillUnmount()
        recoveryComp(comp.__rendered)
    } else if (comp.__childDomOrComp) { //dom like div
        comp.parentNode.removeChild(comp)
        comp.__childDomOrComp.forEach(element => {
            recoveryComp(element)
        })
    } else { //TextNode
        comp.parentNode.removeChild(comp)
    }
}

function setAttrs(dom, props) {
    const allKeys = Object.keys(props)
    allKeys.forEach(k => {
        const v = props[k]

        if(k == "className") {
            dom.setAttribute("class", v)
            return
        }

        if(k == "style") {
            if(typeof v == "string") {
                dom.style.cssText = v //IE
            }

            if(typeof v == "object") {
                for (let i in v) {
                    dom.style[i] =  v[i]
                }
            }
            return

        }

        if(k[0] == "o" && k[1] == "n") {
            const capture = (k.indexOf("Capture") != -1)
            dom.addEventListener(k.substring(2).toLowerCase(), v, capture)
            return
        }

        dom.setAttribute(k, v)
    })
}

function removeAttrs(dom, props) {
    for(let k in props) {
        if(k == "className") {
            dom.removeAttribute("class")
            continue
        }

        if(k == "style") {
            dom.style.cssText = "" //IE
            continue
        }


        if(k[0] == "o" && k[1] == "n") {
            const capture = (k.indexOf("Capture") != -1)
            const v = props[k]
            dom.removeEventListener(k.substring(2).toLowerCase(), v, capture)
            continue
        }

        dom.removeAttribute(k)
    }
}

/**
 *  调用者保证newProps 与 oldProps 的keys是相同的
 * @param dom
 * @param newProps
 * @param oldProps
 */
function diffAttrs(dom, newProps, oldProps) {
    for(let k in newProps) {
        let v = newProps[k]
        let ov = oldProps[k]
        if(v === ov) continue

        if(k == "className") {
            dom.setAttribute("class", v)
            continue
        }

        if(k == "style") {
            if(typeof v == "string") {
                dom.style.cssText = v
            } else if( typeof v == "object" && typeof ov == "object") {
                for(let vk in v) {
                    if(v[vk] !== ov[vk]) {
                        dom.style[vk] = v[vk]
                    }
                }

                for(let ovk in ov) {
                    if(v[ovk] === undefined){
                        dom.style[ovk] = ""
                    }
                }
            } else {  //typeof v == "object" && typeof ov == "string"
                dom.style = {}
                for(let vk in v) {
                    dom.style[vk] = v[vk]
                }
            }
            continue
        }

        if(k[0] == "o" && k[1] == "n") {
            const capture = (k.indexOf("Capture") != -1)
            let eventKey = k.substring(2).toLowerCase()
            dom.removeEventListener(eventKey, ov, capture)
            dom.addEventListener(eventKey, v, capture)
            continue
        }

        dom.setAttribute(k, v)
    }
}

function createNewDom(vnode, parent, comp, olddom, meOrder) {
    if(olddom) {
        recoveryComp(olddom)
    }

    let dom = document.createElement(vnode.nodeName)
    meOrder >=0 && (parent.__childDomOrComp[meOrder] = dom)

    dom.__childDomOrComp = []
    dom.__vnode = vnode
    comp && (comp.__rendered = dom)
    setAttrs(dom, vnode.props)

    if(olddom) {
        parent.replaceChild(dom, olddom)
    } else {
        parent.appendChild(dom)
    }

    for(let i = 0; i < vnode.children.length; i++) {
        renderInBrowser(vnode.children[i], dom, null, null, i)
    }
}

function diffDOM(vnode, parent, comp, olddom) {
    const {onlyInLeft, bothIn, onlyInRight} = diffObject(vnode.props, olddom.__vnode.props)
    setAttrs(olddom, onlyInLeft)
    removeAttrs(olddom, onlyInRight)
    diffAttrs(olddom, bothIn.left, bothIn.right)

    olddom.__childDomOrComp
        .slice(vnode.children.length)
        .forEach(element => recoveryComp(element))

    let domOrComp = olddom.__childDomOrComp = olddom.__childDomOrComp.slice(0, vnode.children.length)
    let olddomChild = olddom.firstChild
    for(let i = 0; i < vnode.children.length; i++) {
        renderInBrowser(vnode.children[i], olddom, null, domOrComp[i], i)
        olddomChild = olddomChild && olddomChild.nextSibling
    }

    while (olddomChild) { //删除多余的子节点
        let next = olddomChild.nextSibling
        olddom.removeChild(olddomChild)
        olddomChild = next
    }
    olddom.__vnode = vnode
}

