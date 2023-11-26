import React, { useEffect } from 'react';
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaBowlFood, FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";

export const Filters = ({ query, setQuery, sort, handleSortAsc, handleSortDesc, removeSort }) => {



    return (
        <>
            <div className='bg-white lg:flex justify-between h-[100px] lg:h-[50px] lg:sticky top=[100px] lg:top-[88px] z-50 bg-opacity-70 items-center' >
                <div className='w-4/5 flex gap-4 justify-betweet items-center px-8 h-[50px] lg:h-[100px]'>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => setQuery('salad')}>
                        <LuSalad color={'#8D3838'} />
                        <p>Salad</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => setQuery('bowl')}>
                        <FaBowlFood color={'#8D3838'} />
                        <p>Veg Bowl</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => setQuery('pasta')}>
                        <GiBowlOfRice color={'#8D3838'} />
                        <p>Pasta</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => setQuery('')}>
                        <FaBowlFood color={'#8D3838'} />
                        <p>ALL</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-1/5 justify-evenly items-center bg-gray-50'>
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
