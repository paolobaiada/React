import React, { createRef } from "react"

class Uncontrolled extends React.Component{
   ref = createRef();
   componentDidMount(){
     this.ref.current.focus();
    
   }
   handleForm = (event) =>{
    event.preventDefault()
    const userName = event.target.elements.username.value;
    const password = event.target.elements.password.value;
   console.log(userName,password)
  }
  render(){
    return(
      <>
      <form onSubmit={this.handleForm}>
      <input type="username" name="username" ref={this.ref}/>
      <input type="password" name="password" />
      <button type="submit">Login</button>
      </form>
     
      </>
  )
  }
}
   
    
    
    

export default Uncontrolled;