import React from 'react';
import { GoSortAsc, GoSortDesc } from "react-icons/go";

export const Filters = ({ sort, handleSortAsc, handleSortDesc }) => {
    return (
        <>
            <div className='bg-white flex justify-between h-[50px] sticky top-[88px] z-50 bg-opacity-70 items-center'>
                <div className='w-2/3'>

                </div>
                <div className='flex w-1/5 justify-evenly'>
                    <div className='bg-red-50 p-2 hover:bg-red-100 rounded' onClick={handleSortAsc}>
                        <GoSortAsc size={"22px"} />
                    </div>
                    <p className='py-2'>price</p>
                    <div className='bg-red-50 p-2 hover:bg-red-100 rounded' onClick={handleSortDesc}>
                        <GoSortDesc size={"22px"} />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
