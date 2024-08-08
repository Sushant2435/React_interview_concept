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
            <div className="flex justify-center mt-5 gap-4">
                <div>
                    <p className="text-center">{this.state.count}</p>
                    <button className="bg-blue-300 px-4 py-2 rounded-full" onClick={this.increment}>Increment</button>
                </div>
                <div>
                    <MyPureComponent name={this.state.name} />
                    <button className="bg-blue-300 px-4 py-2 rounded-full" onClick={this.updateName}>updateName</button>
                </div>

            </div>
        )
    }
}
class MyPureComponent extends PureComponent {
    render() {
        return (
            <div className="text-center">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default ParentComponent

// MyPureComponent will only re-render if the name prop changes.
// Clicking the "Increment" button updates the count state in ParentComponent, but MyPureComponent will not re-render because its name prop hasn't changed.


