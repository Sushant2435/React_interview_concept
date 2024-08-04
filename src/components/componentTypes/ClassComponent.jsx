// Class components are ES6 classes that extend from React.Component. They have a render method that returns JSX, and they can manage their own state and lifecycle methods.



import React from "react";

class ClassComponent extends React.Component {
    constructor() {
        super()
        this.name = "Sushant Sharma";
    }
    render() {
        return (
            <h1>This is a class component created by {this.name}</h1>
        )
    }

}
export default ClassComponent;