
import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component{
  
    /* const [count,setCount] = useState(0); */
    
      constructor(props){
        super(props)
        this.state = {
          count: 0
        };
      }
    
    componentDidMount(){
    setInterval(() =>{
      this.setState({count: this.state.count + this.props.incrementAmount});
    },this.props.incrementIntervall);
  }
   
  render(){
  return (
    <>
    <CounterDisplay count = {this.state.count}/>
    
    </>
  ) 
 }


}


export default Counter;