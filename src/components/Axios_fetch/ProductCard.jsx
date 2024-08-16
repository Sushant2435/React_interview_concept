import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { image, title, price, category, rating, description } = product;
    const descriptionWords = description.split(' ');
    const truncatedDescription = descriptionWords.slice(0, 10).join(' ');
    return (
        <div className='bg-orange-100 w-[300px] h-auto m-4 rounded-2xl shadow-xl pb-4'>
            <img src={image} alt="product image" className='h-[250px] w-full object-fill rounded-t-2xl' />
            <div className='px-3'>
                <div className='text-gray-500 uppercase text-xl mt-2 font-semibold'>{category}</div>
                <div className='font-bold text-[17px] mt-2'>{title}</div>
                <div className='mt-2'>₹ {price}</div>
                <div className='mt-2'>
                    {truncatedDescription}{descriptionWords.length > 10 && '...'}
                    {descriptionWords.length > 10 && (
                        <a to={`/product/${title}`} className='text-blue-500 ml-2'>
                            Read More
                        </a>
                    )}
                </div>
                <div className='flex mt-2'>
                    {[...Array(5)].map((_, index) => {
                        const fullStar = index + 1;
                        const halfStar = index + 0.5;
                        return (
                            <div key={index} >
                                {
                                    rating.rate > fullStar ? (
                                        <FaStar className='text-yellow-600 text-2xl' />
                                    ) : rating.rate > halfStar ? (
                                        <FaStarHalfAlt className='text-yellow-600 text-2xl' />
                                    ) : (
                                        <FaRegStar className='text-yellow-600 text-2xl' />
                                    )
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >

    )
}
export default ProductCard
