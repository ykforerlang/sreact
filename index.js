import createElement from './src/createElement'
import {renderVDOM, renderInBrowser} from './src/renderVDOM'

import Component from './src/Component'

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

    testApp3(num) {
        let result = []
        for(let i = 0; i < num; i++) {
            result.push(<App3/>)
        }
        return result
    }

    render() {
        return (
            <div>
                <a onClick={e => {
                    this.setState({})
                }}>click me</a>
                {this.testApp3(10000)}
            </div>
        )
    }


}


/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
console.log("app1:", app1)


var app2 = renderVDOM(createElement(App2))
console.log("app2:", app2)

var app3 = renderVDOM(<App3/>)
console.log("app3:", app3)*/

console.log("enter:")
renderInBrowser(<AppWithNoVDOM/>, document.getElementById('root'))