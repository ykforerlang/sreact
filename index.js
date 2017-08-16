import createElement from './src/createElement'
import {renderVDOM, renderInBrowser, render} from './src/renderVDOM'

import Component from './src/Component'
import TestUnmout from './src/test/TestUnmout'
import TestUnmount2 from './src/test/TestUnmount2'

///Test app
class App2 {
    constructor(props) {
        this.props = props
    }

    render() {
        return (<div style={{color:'red'}}>
            {this.props.text || 'hello world'}
        </div>)
    }
}

class App3 {
    constructor(props) {
        this.props = props
    }

    render() {
        return (
            <div>
                <App2 text={this.props.text}/>
                <App2/>
                <App2/>
            </div>
        )
    }
}

class App4 extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <App3 text={this.state.text}/>
                <a onClick={e => {
                    this.setState({
                        text: parseInt(Math.random() * 10000) + ""
                    })
                }}>click me</a>
            </div>
        )
    }
}

class AppWithNoVDOM extends Component {
    constructor(props) {
        super(props)
    }

    testApp3() {
        let result = []
        let count = 10000
        for(let i = 0; i < count ; i++) {
            result.push(<App3 text={i}/>)
        }
        return result
    }

    render() {
        return (
            <div
                width={100}>
                <a  onClick={e => {
                    this.setState({})
                }}>click me</a>
                {this.testApp3()}
            </div>
        )
    }
}

class AppReuseComp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            obb: false
        }
    }

    render() {
        return <div>
            <a  onClick={e => {
                this.setState({
                    obb: !this.state.obb
                })
            }}>click me</a>
            {this.state.obb ? [<App2/>] : [<App2/>, <App2/>] }
        </div>
    }
}


/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
console.log("app1:", app1)


var app2 = renderVDOM(createElement(App2))
console.log("app2:", app2)

var app3 = renderVDOM(<App3/>)
console.log("app3:", app3)*/



class SubApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
        console.log("SubApp constructor")
    }

    componentWillMount() {
        console.log("SubApp componentWillMount")
    }

    componentDidMount() {
        console.log("SubApp componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        this.state.text = nextProps.text
        console.log("SubApp componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SubApp shouldComponentUpdate", nextProps, nextState)
        return true
    }

    componentWillUpdate() {
        console.log("SubApp componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("SubApp componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("SubApp componentWillUnmount")
    }



    render() {
        console.log("SubApp render...")
        return (
            <div>SubApp</div>
        )
    }
}

class AppWithLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
        console.log("AppWithLifecycle constructor")
    }

    componentWillMount() {
        console.log("AppWithLifecycle componentWillMount")
    }

    componentDidMount() {
        console.log("AppWithLifecycle componentDidMount")
    }

    componentWillReceiveProps() {
        console.log("AppWithLifecycle componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("AppWithLifecyclev shouldComponentUpdate", this.state.num)
        return true
    }

    componentWillUpdate() {
        console.log("AppWithLifecycle componentWillUpdate", this.state.num)
    }

    componentDidUpdate() {
        console.log("AppWithLifecycle componentDidUpdate", this.state.num)
    }

    componentWillUnmount() {
        console.log("AppWithLifecycle componentWillUnmount")
    }



    render() {
        console.log("AppWithLifecycle render...")
        return (
            <div
                width={100}>
                <a  onClick={e => {
                    this.setState({
                        num: 10
                    })
                    console.log('AppWithLifecycle setState:', this.state.num)
                }}>click me</a>
                <SubApp text={this.state.num}/>
            </div>
        )
    }
}






function TT() {

}
const s = new Date().getTime()
for(var i = 0; i< 100000; i++) {
    new TT()
}
console.log("xx:", new Date().getTime() - s)

const startTime = new Date().getTime()
console.log("enter:")
render(<TestUnmount2/>, document.getElementById('root'))
console.log("first duration:", new Date().getTime() - startTime)