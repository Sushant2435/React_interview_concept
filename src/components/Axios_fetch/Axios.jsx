import React, { useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([]);
    async function getData() {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            setData(result.data)
            console.log(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div>{data.id}</div>
            <button className='bg-blue-300 rounded-xl my-5' onClick={getData}>Get axios data </button>
        </div>
    )
}

export default Axios
