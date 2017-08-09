# sreact
simple react

# sreact
simple react



### 生命周期

1. http://jsfiddle.net/nogbtm12/
```jsx harmony
   let i = 0
   
   class Hello extends React.Component {
      constructor() {
          super()
         console.log('hc')
      }
   
      render() {
          console.log('hi111')
          i ++ 
          return i == 3?<div>hi</div>: <Hello>hi</Hello>
      }
   }
   
   React.render(<Hello/>, document.getElementById('container'));
```

2.
```jsx harmony
class App1 extends React.Component {
  constructor() {
      super()
  }

  componentDidUpdate() {
     console.log("componentDidUpdate")
  }
  
  render() {
      return <div>app1</div>
  }
}

class App2 extends React.Component {
  constructor() {
     super()
     this.state = {
         odd: false
     }
  }
  
  render() {
      return React.createElement(this.state.odd ? "div" : "p", {
          onClick: e => {
                             this.setState({
                                 odd: !this.state.odd
                             })
                         }
          
      }, this.state.odd ? [<App1/>] : [<App1/>, <App1/>, <App1/>, <App1/>])
  }
}

React.render(<App2/>, document.getElementById('container'));
```

3. http://jsfiddle.net/ajmr12zk/
```jsx harmony
class SubApp extends React.Component {
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

class AppWithLifecycle extends React.Component {
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

React.render(<AppWithLifecycle/>, document.getElementById('container'));
```