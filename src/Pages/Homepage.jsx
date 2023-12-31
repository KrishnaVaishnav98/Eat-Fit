import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { json } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from '../Components/Footer';
import { ContactUs } from '../Components/ContactUs';
import { Filters } from '../Components/Filters';
import { FaRegSadTear } from "react-icons/fa";

export const Homepage = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState({});



    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const fetchFoodItems = async () => {
        try {
            setLoading(true)
            const apiUrl = `https://alive-blazer-tick.cyclic.app/data?q=${query}`;

            const res = await fetch(apiUrl);

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await res.json();
            setData(data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setErr(true);
        }
    };

    const sortFoodItems = async () => {
        try {
            setLoading(true)
            const apiUrl = `https://alive-blazer-tick.cyclic.app/data?q=${query}&_sort=price&_order=${sort}`;

            const res = await fetch(apiUrl);

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await res.json();
            setData(data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setErr(true);
        }
    };


    useEffect(() => {
        if (sort) {
            sortFoodItems()
        } else {
            fetchFoodItems();
        }

    }, [query, sort])


    useEffect(() => {
        Aos.init();
    }, []);

    const removeSort = () => {
        setSort("")
    }

    const handleSortAsc = () => {
        setSort("asc")
    }

    const handleSortDesc = async () => {
        setSort("desc")
    }

    return (
        <div >
            <Navbar query={query} setQuery={setQuery} />
            <Filters query={query} setQuery={setQuery} sort={sort} handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc} removeSort={removeSort} />
            {loading ? (
                <Spinner color="pink" className='m-auto p-auto mt-20' />
            ) : (
                <div id='main' className="grid grid-cols-2 md:grid-cols-3 m-auto p-auto mt-8 md:mt-16 ">
                    {
                        data.length == 0 ?
                            <p className='text-[20px] text-red-800 text-bold m-auto p-auto align-center py-16'><FaRegSadTear size={'24px'} />No Items !! You can try something else.</p>
                            :
                            data?.map((el) => (
                                <Card key={el.id} className="mt-6 w-36 md:w-60 lg:w-72 xl:w-96 m-auto p-auto mb-12" onClick={() => handleOpen(el)}
                                    data-aos="fade-up" data-aos-duration="1000" >
                                    <CardHeader color="blue-gray" className="relative w-fit h-fit md:h-56">
                                        <div className='w-fit h-fit'>
                                            <img
                                                src={el.image}
                                                alt="card-image"
                                            />
                                        </div>

                                    </CardHeader>
                                    <CardBody className=' lg:flex justify-between'>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-[12px] md:text-[20px] text-semibold text-black">
                                            {el.name}
                                        </Typography>

                                    </CardBody>
                                    <CardFooter className="lg:flex justify-between pt-0">
                                        <Typography className="mb-2 text-[12px] md:text-[20px] text-semibold text-red-600">
                                            $ {el.price}
                                        </Typography>
                                        <Button onClick={() => handleOpen(el)} variant="gradient">
                                            ADD
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                    <Dialog
                        open={open}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                        size="lg"
                        className="max-w-2xl mx-auto"
                    >
                        <DialogBody >
                            <div className='lg:flex gap-2 md:gap-8'>
                                <div className='w-full md:w-1/2'>
                                    <img
                                        className='w-full rounded'
                                        src={selectedItem.image}
                                        alt="card-image"
                                    />
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <div className='mb-2 lg:mb-4 text-xl '>
                                        <p className='text-black'>{selectedItem?.name}</p>
                                    </div>
                                    <hr className='mb-4' />
                                    <div className='flex justify-between mb-2 lg:mb-8'>
                                        <p className='text-[16px] lg:text-[24px] text-red-800'>$ {selectedItem?.price}</p>
                                        <Button variant="gradient" color="green" onClick={() => setOpen(false)}>
                                            <span>Add</span>
                                        </Button>
                                    </div>
                                    <hr className='mb-2 lg:mb-8' />
                                    <div>
                                        <p className='pb-2 text-[12px] lg:text-[16px] text-blue-800'>Category: {selectedItem?.category}</p>
                                        <p className='text-[12px] lg:text-[16px]'>{selectedItem?.description}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                        </DialogBody>
                        <DialogFooter>
                            <Button variant="text" color="red" onClick={() => setOpen(false)} className="mr-1">
                                <span>Cancel</span>
                            </Button>

                        </DialogFooter>
                    </Dialog>
                </div>
            )
            }
            <ContactUs />
            <Footer />
        </div >
    )
}
