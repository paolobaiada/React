import React from "react";

class Welcome extends React.Component{
    
    render(){
        
       
        if (this.props.age > 18 && this.props.age < 65) {
            return <p>Welcome, {this.props.name}  your age is {this.props.age}</p>
        }
       
    }
}
Welcome.defaultProps = {
    name: 'Paolo'
};

export default Welcome;