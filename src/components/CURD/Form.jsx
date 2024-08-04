import React, { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: ""
    });
    const [tabledata, setTabledata] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    function handleChange(e) {
        const { id, value } = e.target;
        setData(inputData => ({
            ...inputData,
            [id]: value
        }));
    }

    function getData(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedTableData = tabledata.map((item, index) =>
                index === currentIndex ? data : item
            );
            setTabledata(updatedTableData);
            setIsEditing(false);
            setCurrentIndex(null);
        } else {
            setTabledata(prevTableData => [...prevTableData, data]);
        }
        setData({
            name: "",
            email: ""
        });
    }

    function editData(index) {
        setData(tabledata[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    }

    function deleteData(index) {
        const updatedTableData = tabledata.filter((_, i) => i !== index);
        setTabledata(updatedTableData);
    }

    return (
        <div>
            <div className='py-10 flex justify-center bg-gray-100'>
                {/* Create/Update Data */}
                <form className='flex flex-col justify-center bg-orange-200 p-10' onSubmit={getData}>
                    <h1 className='text-2xl mb-10 font-bold'>Crud Operation Form</h1>
                    <label htmlFor="name" className='font-bold'>Name</label>
                    <input type="text" id="name" value={data.name} onChange={handleChange} className='mb-4 placeholder:text-gray-400 focus:ring-0 py-2 px-3 rounded-lg' placeholder='Name' required />
                    <label htmlFor="email" className='font-bold'>Email</label>
                    <input type="email" id="email" value={data.email} onChange={handleChange} className='mb-4 placeholder:text-gray-400 focus:ring-0 py-2 px-3 rounded-lg' placeholder='Email' required />
                    <button type="submit" className='text-lg font-bold border bg-green-300 px-6 py-2 rounded-lg w-1/2 m-auto'>
                        {isEditing ? 'Update' : 'Submit'}
                    </button>
                </form>
            </div>
            <div>
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Read Data */}
                    <tbody className='text-black'>
                        {tabledata.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='mr-2 bg-blue-300 px-4 py-1 rounded' onClick={() => editData(index)}>Edit</button>
                                    <button className='bg-red-300 px-4 py-1 rounded' onClick={() => deleteData(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Form;
