import React from "react";

class Welcome extends React.Component{
    
    render(){
        
        Welcome.defaultProps = {
            name: 'Paolo'
        };
        if (this.props.age > 18) {
            return <p>Welcome, <strong>{this.props.name}</strong>  your age is {this.props.age}</p>
        }
       
    }
}

export default Welcome;