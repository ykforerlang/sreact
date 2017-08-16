/**
 * Created by apple on 2017/8/16.
 */
import Component from '../Component'
import createElement from '../createElement'

class SubSubApp extends Component {
    componentWillUnmount() {
        console.log("SubSubApp componentWillUnmount")
    }
    render() {
        return (
            <div>subsubapp</div>
        )
    }
}
class SubApp extends Component {
    componentWillUnmount() {
        console.log("SubApp componentWillUnmount")
    }
    render() {
        return (
            <div>
                <SubSubApp/>
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
            <div onClick={e => this.setState({
                odd: !this.state.odd
            })}>
                {this.state.odd ? [<SubApp/>, <SubApp/>]: [<SubApp/>]}
            </div>
        )
    }
}