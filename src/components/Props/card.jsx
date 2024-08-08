import React from 'react'
import propTypes from 'prop-types'

const Card = ({ fruit, index }) => {
    return (
        <div className='cursor-pointer h-80 w-80 gap-2 bg-orange-200 flex justify-center items-center m-4 rounded-2xl font-semibold text-xl hover:bg-orange-400'>
            <div>{index + 1}.</div>
            <div>{fruit.name}</div>
        </div>
    )
}
// The PropTypes.shape is used when you need to validate an object prop with a specific shape. In your Card component, the fruit prop is expected to be an object with a name property that is a string. By using PropTypes.shape, you can specify the shape of the fruit object.
// Card.propTypes = {
//     fruit: propTypes.shape({
//         name: propTypes.string.isRequired,
//     }).isRequired,
//     index: propTypes.number.isRequired,
// };

// direct method for object

Card.propTypes = {
    fruit: propTypes.object,
    index: propTypes.number.isRequired,
};

export default Card
