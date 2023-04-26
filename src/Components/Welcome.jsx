import React from "react";

class Welcome extends React.Component{
    
    render(){
        
        Welcome.defaultProps = {
            name: 'Paolo'
        };
        return <p>Welcome, {this.props.name}</p>
    }
}

export default Welcome;