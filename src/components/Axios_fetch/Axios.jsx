import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const Axios = () => {
    const [data, setData] = useState({
        loading: true,
        products: [],
        error: false
    })
    const { loading, products, error } = data;
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData({ ...data, products: res.data, loading: false, error: false })
            }).catch((err) => {
                console.log(err)
                setData({ ...data, loading: false, error: true });
            })
    }, [])

    return (
        <>
            {loading ? (
                <div>Loading....</div>
            ) : error ? (
                <div>There is something went wrong</div>
            ) : (
                <>
                    <div className='flex flex-wrap justify-between px-6 py-5'>
                        {
                            products.map((product, index) => (
                                <ProductCard product={product} key={index} />
                            ))
                        }
                    </div>
                </>
            )
            }
        </>
    )
}

export default Axios
