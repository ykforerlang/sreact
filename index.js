import createElement from './src/createElement'
import {renderVDOM, renderInBrowser} from './src/renderVDOM'


///Test app
class App2 {
    constructor(props) {
        this.props = props
        console.log('app2:', props)
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
        console.log('app3:', props)
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

class App4 {
    constructor(props) {
        this.props = props
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


/*var app1 = renderVDOM(createElement('div', {color: 'red'}, 'hello world'))
console.log("app1:", app1)


var app2 = renderVDOM(createElement(App2))
console.log("app2:", app2)

var app3 = renderVDOM(<App3/>)
console.log("app3:", app3)*/

console.log("enter:")
renderInBrowser(<App3 text="app3"/>, document.getElementById('root'))