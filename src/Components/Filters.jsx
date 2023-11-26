import React, { useEffect } from 'react';
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";

export const Filters = ({ sort, handleSortAsc, handleSortDesc, removeSort }) => {

    return (
        <>
            <div className='bg-white flex justify-between h-[50px] sticky top-[88px] z-50 bg-opacity-70 items-center' >
                <div className='w-2/3'>

                </div>
                <div className='flex w-1/5 justify-evenly items-center bg-gray-50'>
                    <div className='bg-red-50 p-2 hover:bg-red-100 rounded' onClick={handleSortAsc}>
                        <GoSortAsc size={"22px"} />
                    </div>
                    <p className={`${sort ? 'bg-blue-100 px-4 rounded-lg' : ''} py-2 text-md text-bold`} >price</p>
                    <div className='bg-red-50 p-2 hover:bg-red-100 rounded' onClick={handleSortDesc}>
                        <GoSortDesc size={"22px"} />
                    </div>
                    <IoCloseCircleSharp size={'22px'} color='#8D3838' onClick={removeSort} />
                </div>
            </div>
            <hr />
        </>
    )
}
