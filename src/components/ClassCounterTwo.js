import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      } 
    }

    incrementCount = ()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }

    decrementCount = ()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count-1
            }
        })
    }

    incrementFive = ()=>{
        for(let i=0;i<5;i++){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    }



  render() {
    return (
      <div>ClassCounterTwo with prevState
        <br/>
        count:{this.state.count}<br/>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.incrementFive}>Increment5</button>

      </div>
    )
  }
}

export default ClassCounterTwo