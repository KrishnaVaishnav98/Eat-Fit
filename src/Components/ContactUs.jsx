import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Alert } from "@material-tailwind/react";

export const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [alert, setAlert] = useState(false);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        Aos.init();
    }, []);

    const handleSubmit = () => {
        if (!name || !email || !msg) {
            setAlert(true)
        }
        setOpen(true)
    }
    const handleClose = () => {
        setAlert(false)
        setOpen(false)
    }

    return (
        <div id="contact" className='contact-us bg-blue-900 rounded-2xl ' data-aos="fade-up" data-aos-duration="1000" >
            <section className="text-white body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12" data-aos="fade-left" data-aos-duration="1000">
                        <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-bold">
                            CONTACT US
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            At Eatfit we offer healthy, yummy, honest & wholesome Indian food, made with real ingredients, zero trans fat, and lots of love!
                            #HealthyMadeHappier
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto" data-aos="fade-right" data-aos-duration="1000">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-lg text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-lg text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 text-lg text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={msg}
                                        onChange={(e) => setMsg(e.target.value)}
                                        placeholder='write here...'
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-900 rounded text-lg"
                                    onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            </div>
                            <Alert
                                open={open}
                                onClose={handleClose}
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 100 },
                                }}
                            >
                                {alert ? "Please fill all details" : "Your message reached to us !!"}
                            </Alert>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
