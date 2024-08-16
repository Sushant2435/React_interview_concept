// fetch is inbuilt webapi method present in most of the modern browsers where as axios is a third party library is built on top of XMLHttpRequest object.
// axios performs automatic parsing of response data where as in fetch we need to manually parse the response data(eg: response.json()).
// axios supports interceptors by using which we can modify the request or response before they are sent/received from the server.
// axios prevents csrf (cross site request forgery)attacks.

import React, { useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([]);
    async function getData() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            if (result.ok) {
                const data = await result.json();
                setData(data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div>{data.id}</div>
            <button className='bg-blue-300 rounded-xl' onClick={getData}>Get fetch data </button>
        </div>
    )
}

export default Fetch
