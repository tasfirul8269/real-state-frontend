import React from 'react';

const SearchField = () => {
    return (
        <form className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            <div className='flex justify-between items-center gap-1.5'>
            <button className='cursor-pointer px-16 md:px-8 py-4 text-gray-400 bg-[#f6f6f1] rounded-md hover:border border-black'>Buy</button>
            <button className='cursor-pointer px-16 md:px-8 py-4 text-gray-400 bg-[#f6f6f1] rounded-md hover:border border-black'>Rent</button>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 bg-gray-100 border border-gray-300  px-6 rounded-md'>
                <select className=' px-8 py-4 text-gray-400 bg-gray-100 cursor-pointer'>
                    <option className='cursor-pointer' value="residential" name="residential">Residential</option>
                    <option className='cursor-pointer' value="residential">Commercial</option>
                    <option className='cursor-pointer' value="offPlan">Off Plan</option>
                </select>
                <input type="text" placeholder='City, building or community' className='py-4 px-8' />
            </div>
            <button type='submit' className='font-bold bg-green-300 text-gray-700 px-8 hover:text-white hover:bg-green-800 py-4 rounded-full cursor-pointer'>Search</button>
        </form>
    );
};

export default SearchField;