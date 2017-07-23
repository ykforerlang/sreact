/**
 * Created by apple on 2017/7/20.
 */
import { renderInBrowser } from './renderVDOM'

export default class Component {
    constructor(props) {
        this.props= props
        this.state = {}
    }

    setState(state) {
        this.state = state

        setTimeout(() => {
            const vnode = this.render()
            let olddom = getDOM(this)

            let startTime = new Date().getTime()
            renderInBrowser(vnode, olddom.parentNode, this, olddom)
            console.log("render duration:", new Date().getTime() - startTime)
        }, 0)
    }
}


function getDOM(comp) {
    let rendered = comp.__rendered
    while (!rendered.nodeType) { //判断对象是否是dom
        rendered = rendered.__rendered
    }
    return rendered
}