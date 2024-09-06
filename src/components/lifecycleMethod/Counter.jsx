import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevprops, prevState) {
        // console.log(prevprops.number)
        // console.log(this.props.number)
        if (prevprops.number !== this.props.number) {
            console.log("Comonent Upodate")
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount : Component Removed")
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
