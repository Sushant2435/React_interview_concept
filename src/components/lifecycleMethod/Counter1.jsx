import React, { useEffect } from "react";

const Counter1 = ({ number }) => {
    useEffect(() => {
        console.log("Function component")

        return () => {
            console.log("remove function component")
        }
    }, [])

    return (
        <div>{number}</div>
    )
}

export default Counter1;