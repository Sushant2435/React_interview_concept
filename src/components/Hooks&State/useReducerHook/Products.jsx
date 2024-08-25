import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import ProductCard from '../../Axios_fetch/ProductCard';

const reducer = (state, action) => {
    const { type, payload } = action;
    if (type == "SUCCESS") {
        return { ...state, Products: payload, loading: false }
    } else if (type == "ERROR") {
        return { ...state, loading: false, error: true }
    }
}
const initialState = {
    loading: true,
    Products: [],
    error: false,
}

const Products = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { Products, error, loading } = state;

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('https://fakestoreapi.com/products')
                dispatch({ type: "SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "ERROR" })
            }
        })()
    }, [])
    return (
        <div className='text-center'>
            {error && <div>SomeThing went wrong</div>}
            {loading && <div>Loading...</div>}
            <h1 className='text-3xl font-bold'>useReducer Hooks functioning</h1>
            <div className='flex flex-wrap justify-center'>
                {Products.map((item) => (
                    <ProductCard product={item} />
                ))}
            </div>

        </div>
    )
}

export default Products
