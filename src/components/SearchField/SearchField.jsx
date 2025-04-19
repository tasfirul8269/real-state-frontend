import React from 'react';

const SearchField = () => {


    return (
        <form className='flex flex-col md:flex-row gap-4 justify-center items-center py-4'>
            <div className='flex justify-between items-center gap-1.5'>
            <button onClick={(e) => e.preventDefault()} className='cursor-pointer px-16 md:px-8 py-4 text-gray-400 bg-[#f6f6f1] hover:bg-red-500 hover:text-white rounded-md border-black'>Buy</button>
            <button onClick={(e) => e.preventDefault()} className='cursor-pointer px-16 md:px-8 py-4 text-gray-400 bg-[#f6f6f1] hover:bg-red-500 hover:text-white rounded-md border-black'>Rent</button>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 bg-gray-100 border border-gray-300  px-6 rounded-md'>
                <select className=' px-8 py-4 text-gray-400 bg-gray-100 cursor-pointer focus:outline-none'>
                    <option className='cursor-pointer text-black active:active hover:bg-gray-300 active:text-white' value="residential" name="residential">Residential</option>
                    <option className='cursor-pointer text-black active:active hover:bg-gray-300 active:text-white' value="residential">Commercial</option>
                    <option className='cursor-pointer text-black active:active hover:bg-gray-300 active:text-white' value="offPlan">Off Plan</option>
                </select>
                <input type="text" placeholder='City, building or community' className='py-4 px-8 focus:outline-none' />
            </div>
            <button type='submit' className='font-bold  text-white px-8 bg-red-400 hover:bg-red-600 py-4 rounded-full cursor-pointer'>Search</button>
        </form>
    );
};

export default SearchField;