import React, { useEffect, useState } from 'react'

const TitleIncrement = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `title : ${count}`;
    }, [count])
    return (
        <div className='bg-white h-96 w-96 rounded-3xl flex justify-center flex-col items-center gap-20 font-bold text-2xl'>
            <div className='flex gap-5 '>
                <button onClick={() => setCount(count + 1)} className='bg-slate-200 rounded-2xl px-4 py-6 hover:bg-slate-400'>++</button>
                <button onClick={() => setCount(count - 1)} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>--</button>
            </div>
        </div>
    )
}

export default TitleIncrement
