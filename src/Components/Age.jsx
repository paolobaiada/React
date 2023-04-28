import React from "react";
class Age extends React.Component{
render(){
    if (this.props.age > 18) {
        return <p>your age is {this.props.age}</p>
    }
    
}
}
export default Age;