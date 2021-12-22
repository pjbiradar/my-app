import './App.css';
import React, { Component } from 'react'
import './components/AppStyle.css';
import Functional from './components/Functional';
import Classcom from './components/Classcom';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       login:false,
       login2:false
       
    }

  
  }
  change=()=>{
    this.setState({
      login:!this.state.login
    })
    
  }
  change2=()=>{
    this.setState({
      login2:!this.state.login2
    })
    
  }
  
  render() {
    return (
      <div className="App">
      <h1 className='first'>Styling Using Functional and Component Class</h1>
      <div className='end'>
      <button onClick={this.change} className='second'>To see styling in Functional Component</button>
      <button onClick={this.change2} className='third'>To see styling in class component</button>
      </div>
      <div className='home1'>
         {this.state.login ? <Functional/>:null}
         {this.state.login2 ? <Classcom/>:null}
      </div>
      

    
    </div>
        
        
      
        
        
      
    )
  }
}
export default App;
