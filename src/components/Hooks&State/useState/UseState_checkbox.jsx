import React, { useState } from 'react'

const UseState_checkbox = () => {
    const [liked, setLiked] = useState(true);
    function handleChange(e) {
        setLiked(e.target.checked)
    }
    return (
        <div className='bg-white h-96 w-96 rounded-3xl flex justify-center flex-col items-center gap-20 font-bold text-2xl'>
            <label htmlFor="checkbox">I liked this</label>
            <input type="checkbox" checked={liked} onChange={handleChange} id='checkbox' name='checkbox' className='h-10 w-10 cursor-pointer' />
            <p>You {liked ? "liked" : "did not liked"} checkbox.</p>
        </div>
    )
}

export default UseState_checkbox
