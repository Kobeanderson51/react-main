import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const Body = () => {
    const slideImages = [
        { image: '/images/Balance-tracker.jpg', link: 'https://react-project-one-indol.vercel.app/', text: 'Balance Tracker', additionalText: 'This Project was done with React.js' },
        { image: '/images/todo-app.PNG', link: 'https://to-do-app-seven-ebon.vercel.app/', text: 'To-Do App', additionalText: 'This project was done with plain JavaScript' },
        { image: '/images/api-server.jpg', link: 'https://google.com', text: 'API Server', additionalText: 'This Project was done with Node.js' },
        { image: '/images/Golf-app.jpg', link: 'https://golf-page-redesign.vercel.app/', text: 'Golf App', additionalText: 'This project was done with scss' },
    ];

    const properties = {
        prevArrow: <button className="custom-slide-button z-30 text-black bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none left-0 ml-4 md:ml-8 absolute top-1/2 transform -translate-y-1/2 px-4 py-2" aria-label="Previous slide">◀</button>,
        nextArrow: <button className="custom-slide-button z-30 text-black bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none right-0 mr-4 md:mr-8 absolute top-1/2 transform -translate-y-1/2 px-4 py-2" aria-label="Next slide">▶</button>,
        swipe: true,
    };

    return (
        <div className="flex flex-col items-center bg-black w-full py-8 z-30">
            <h1 className="text-3xl md:text-4xl text-white italic mb-6 text-center">
                Welcome to my Projects!
            </h1>
            <div className="container mx-auto max-w-4xl px-4 lg:px-0 relative">
                <Slide {...properties}>
                    {slideImages.map((slide, index) => (
                        <div key={index} className="each-slide relative flex justify-center mb-4">
                            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="relative group block">
                                <Image src={slide.image} alt={slide.text} width={800} height={500} className="rounded-lg shadow-lg group-hover:opacity-90 transition-opacity duration-300" />
                                <div className=" absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                    <div className="font-semibold text-xl mb-2">{slide.text}</div>
                                    <div className="text-base">{slide.additionalText}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default Body;
