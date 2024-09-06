import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { NavbarItem } from '../../assets/data';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const auth = useSelector((store) => {
        return store.auth;
    })
    console.log(auth)
    return (
        <header className='flex justify-between items-center w-full py-3 px-10 text-gray-600 bg-blue-100 text-lg'>
            <Link to='/' className='font-semibold text-3xl'>Sushant</Link>
            <nav>
                <ul className='flex gap-6 font-bold'>
                    {NavbarItem.map((item) => (
                        <Link to={`/${item.path}`} key={item.id}>{item.name}</Link>
                    ))}
                </ul>
            </nav>
            <div className='flex items-center font-bold'>
                {auth.isAuthenticated ? <p className='rounded-full p-3 text-lg font-bold bg-green-400'>{auth.username[0]}</p> : <Link to='/login' className='border rounded-full px-8 py-3 bg-green-500'>Login</Link>}
                <button className='border rounded-full px-8 py-3 bg-green-500'>Get in touch</button>
                <button className=' transition-transform duration-500 ease-in-out p-3 rounded-full bg-[rgb(194,101,71)] -ml-4 -rotate-45 hover:translate-x-1 hover:rotate-0'>
                    <IoIosArrowRoundForward />
                </button>
            </div>
        </header>
    )
}

export default Navbar
