// Function components are simpler and are typically just JavaScript functions that take props as an argument and return JSX.With the introduction of Hooks in React 16.8, function components can also manage state and lifecycle features.

import ClassComponent from "./ClassComponent";

const FunctionComponent = () => {
    const name = "Sushant"

    return (
        <div className="text-center">
            <h1 className="text-center text-2xl font-bold my-5">Components in React</h1>
            <h1>This is Function Component Created by {name}</h1>
            <ClassComponent />
        </div>
    )
}
export default FunctionComponent;