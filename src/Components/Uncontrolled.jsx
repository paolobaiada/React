import React from "react"

class Uncontrolled extends React.Component{
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
      <input type="username" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    
      </form>
     
      </>
  )
  }
}
   
    
    
    

export default Uncontrolled;