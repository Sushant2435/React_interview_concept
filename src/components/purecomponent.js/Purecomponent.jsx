import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

const Purecomponent1 = () => {
    const name = "Sushant";

    return (
        <div>
            <Purecomponent name={name} />
        </div>
    )
}

export default Purecomponent1
