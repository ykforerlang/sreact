/**
 * Created by apple on 2017/8/16.
 */
import Component from '../Component'
import createElement from '../createElement'

class SubApp1 extends Component {
    componentWillMount() {
        console.log("subapp1 will mount")
    }
    componentWillUnmount() {
        console.log("subapp1 will unmount")
    }
    render() {
        return (
            <div id={`app1${parseInt(Math.random() * 10000)}`}>app1</div>
        )
    }
}
class SubApp2 extends Component {
    componentWillMount() {
        console.log("subapp2 will mount")
    }
    componentWillUnmount() {
        console.log("subapp2 will unmount")
    }
    render() {
        return (
            <div id={`app2${parseInt(Math.random() * 10000)}`}>
                app2
            </div>
        )
    }
}
export default class TestUnmout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            odd: false
        }
    }

    render() {
        return (
            <div id={`father${parseInt(Math.random() * 10000)}`} onClick={e => this.setState({
                odd: !this.state.odd
            })}>
                {this.state.odd ? [<SubApp1/>]: [<SubApp2/>]}
            </div>
        )
    }
}