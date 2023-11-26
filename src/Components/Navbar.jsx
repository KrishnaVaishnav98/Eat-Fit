import React from 'react'
import logo from '../Images/eat_fit_logo.png'
import { Link } from 'react-scroll'
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";

export const Navbar = ({ query, setQuery }) => {

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <div className='bg-white px-2 py-2 lg:px-8 lg:py-6 block lg:flex justify-between lg:sticky lg:top-0 lg:z-50 lg:bg-opacity-70'>
                <div className='flex items-center gap-6 pb-4 lg:pb-0 justify-between items-center'>
                    <div className='flex lg:hidden'>
                        <Menu >
                            <MenuHandler>
                                <Button>
                                    <HiMenuAlt2 size={'18px'} />
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem className='cursor-pointer'><Link to={"main"}>Order</Link></MenuItem>
                                <MenuItem className='cursor-pointer'><Link to={"main"}>Meal Plans</Link></MenuItem>
                                <MenuItem className='cursor-pointer'><Link to={"contact"}>Contact Us</Link></MenuItem>
                                <MenuItem className='cursor-pointer'><Link to={"main"}>Food Pass</Link></MenuItem>
                                <MenuItem className='cursor-pointer'><Link to={"about"}>About Us</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className='w-20 h-8'>
                        <img className='w-full' src={logo} alt="https://cdn.branch.io/branch-assets/1649145052553-og_image.jpg" />
                    </div>
                    <div className='text-sm items-center leading-5 pt-2 font-semibold gap-6 hidden lg:flex cursor-pointer'>
                        <Link to={"main"}>Order</Link>
                        <Link to={"main"}>Meal Plans</Link>
                        <Link activeClassName="active" to={"contact"} smooth={true} duration={500}>Contact Us</Link>
                        <Link to={"main"}>Food Pass</Link>
                        <Link to={"about"}>About Us</Link>
                    </div>
                    <div className='flex lg:hidden gap-6 justify-around items-center'>

                        <IoLocationOutline size={'18px'} />
                        <MdFoodBank size={'18px'} />
                        <MdOutlineNotificationsActive size={'18px'} />
                        <FaRegUser size={'18px'} />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center mx-1 lg:mx-0 w-full lg:w-64 h-10 bg-gray-50 px-2 rounded-xl'>
                        <BiSearchAlt size={'24px'} />
                        <input className='border-none bg-gray-50 outline-none px-2' type="text" placeholder='Search food' value={query} onChange={handleChange} />
                    </div>
                    <div className='hidden lg:flex gap-6 justify-around items-center'>
                        <IoLocationOutline size={'24px'} />
                        <MdFoodBank size={'24px'} />
                        <MdOutlineNotificationsActive size={'24px'} />
                        <FaRegUser size={'24px'} />
                    </div>
                </div>
            </div>
            <hr className='text-grey-400 lg:sticky top-[120px] lg:top-[88px] z-50' />
        </>
    )
}
