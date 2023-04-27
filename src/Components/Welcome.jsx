import React from "react";

class Welcome extends React.Component{
    
    render(){
        
       
        if (this.props.age) {
            return <p>Welcome, {this.props.name}  your age is {this.props.age}</p>
        }
       
    }
}
Welcome.defaultProps = {
    name: 'Paolo'
};

export default Welcome;