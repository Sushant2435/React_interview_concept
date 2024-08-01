import React, { Component, PureComponent } from "react";

class ParentComponent extends Component {
    state = {
        name: "Sushant",
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    updateName = () => {
        const newName = this.state.name === 'Sharma' ? 'Sushant' : 'Sharma';
        this.setState({ name: newName });
    };

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <MyPureComponent name={this.state.name} />
                <button onClick={this.updateName}>updateName</button>
            </div>
        )
    }
}
class MyPureComponent extends PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default ParentComponent

// MyPureComponent will only re-render if the name prop changes.
// Clicking the "Increment" button updates the count state in ParentComponent, but MyPureComponent will not re-render because its name prop hasn't changed.


