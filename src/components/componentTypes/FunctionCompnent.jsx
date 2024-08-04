// Function components are simpler and are typically just JavaScript functions that take props as an argument and return JSX.With the introduction of Hooks in React 16.8, function components can also manage state and lifecycle features.

const FunctionComponent = () => {
    const name = "Sushant"

    return (
        <>
            <h1>This is Function Component Created by {name}</h1>
        </>
    )
}
export default FunctionComponent;