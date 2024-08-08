// A pure component in React is a component that only re-renders when its props change. It helps optimize performance by preventing unnecessary re-renders when the component's props remain the same.

import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
    render() {
        return (
            <div className=" text-center">
                <div className="text-center text-2xl font-bold my-5">Pure Component</div>
                <h1>Hello {this.props.name}</h1>
            </div>

        )
    }
}

const Purecomponent1 = () => {
    const name = "Sushant Sharma";

    return (
        <div>
            <Purecomponent name={name} />
        </div>
    )
}

export default Purecomponent1
