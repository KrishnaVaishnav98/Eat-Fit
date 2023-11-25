import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { json } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";

export const Homepage = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                setLoading(true)
                const apiUrl = `https://alive-blazer-tick.cyclic.app/data?q=${''}`;

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

        fetchFoodItems();
    }, [])



    return (
        <div>
            <Navbar />
            {loading ? (
                <Spinner color="pink" />
            ) : (
                <div className="grid grid-cols-3 m-auto p-auto mt-16">
                    {data?.map((el) => (
                        <Card key={el.id} className="mt-6 w-96 m-auto p-auto mb-12" onClick={() => handleOpen(el)}>
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={el.image}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {el.name}
                                </Typography>
                                <Typography>
                                    {el.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
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
                    >
                        <DialogHeader >{selectedItem?.name}</DialogHeader>
                        <DialogBody >
                            <div className='flex gap-8'>
                                <div className='w-1/2'>
                                    <img
                                        className='w-full rounded'
                                        src={selectedItem.image}
                                        alt="card-image"
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <div className='mb-4 text-xl '>
                                        <p className='text-black'>{selectedItem?.name}</p>
                                    </div>
                                    <hr className='mb-4' />
                                    <div className='flex justify-between mb-8'>
                                        <p className='text-[24px] text-red-800'>$ {selectedItem?.price}</p>
                                        <Button variant="gradient" color="green" onClick={() => setOpen(false)}>
                                            <span>Add</span>
                                        </Button>
                                    </div>
                                    <hr className='mb-8' />
                                    <div>
                                        <p className='pb-2 text-blue-800'>Category: {selectedItem?.category}</p>
                                        <p className=''>{selectedItem?.description}</p>
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
        </div >
    )
}
