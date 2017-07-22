/**
 * Created by apple on 2017/7/16.
 */

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

export function renderInBrowser (vnode, parent) {
    let dom
    if(typeof vnode == "string") {
        dom = document.createTextNode(vnode)
        parent.appendChild(dom)
    } else if(typeof vnode.nodeName == "string") {
        dom = document.createElement(vnode.nodeName)
        setAttrs(dom, vnode.props)
        parent.appendChild(dom)

        for(let i = 0; i < vnode.children.length; i++) {
            renderInBrowser(vnode.children[i], dom)
        }
    } else if (typeof vnode.nodeName == "function") {
        let func = vnode.nodeName
        let inst = new func(vnode.props)
        inst.__parentDOM = parent
        let innerVnode = func.prototype.render.call(inst)
        renderInBrowser(innerVnode, parent)
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
                dom.style.cssText = v
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
            dom.addEventListener(k.substring(2).toLowerCase(), capture)
            return
        }

        dom.setAttribute(k, v)
    })
}
