import React from 'react'
import Counter from './Counter';
import Counter1 from './Counter1';
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    // componentDidMount() {
    //     console.log("componentDidMount: When component render first time")
    // }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <div className='text-center bg-gray-200 w-[300px] h-[300px] flex flex-col justify-center items-center m-auto gap-10'>
                <h1 className='text-xl font-semibold'>React LifeCycle Method </h1>
                <Counter number={this.state.count} />
                <Counter1 number={this.state.count} />
                <button onClick={() => { this.increment() }} className='bg-blue-400 p-2 rounded-lg font-bold'>Increment</button>
            </div>
        )
    }
}

export default Main;