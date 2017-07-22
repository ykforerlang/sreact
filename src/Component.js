/**
 * Created by apple on 2017/7/20.
 */
import { renderInBrowser } from './renderVDOM'

class Component {
    setState(state) {
        this.state = state

        setTimeout(() => {
            const vnode = this.render()
            renderInBrowser(vnode, this.__parentDOM)
        }, 0)
    }
}