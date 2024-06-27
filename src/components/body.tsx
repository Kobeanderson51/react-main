import React from 'react';
import { Slide } from 'react-slideshow-image'; // Ensure 'react-slideshow-image' is installed and imported correctly
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image'; // Import 'next/image' for optimized image loading

const Body = () => {
    const slideImages = [
        { image: '/images/Balance-tracker.jpg', link: 'https://react-project-one-indol.vercel.app/', text: 'Balance Tracker', additionalText: 'This Project was done with React.js' },
        { image: '/images/todo-app.PNG', link: 'https://to-do-app-seven-ebon.vercel.app/', text: 'To-Do App', additionalText: 'This project was done with plain JavaScript' },
        { image: '/images/api-server.jpg', link: 'https://google.com', text: 'API Server', additionalText: 'This Project was done with Node.js' },
        { image: '/images/Golf-app.jpg', link: 'https://golf-page-redesign.vercel.app/', text: 'Golf App', additionalText: 'This project was done with scss' },
    ];

    const isMobile = () => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };

    const properties = {
        prevArrow: isMobile() ? undefined : <button className="custom-slide-button z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none" aria-label="Previous slide">◀</button>,
        nextArrow: isMobile() ? undefined : <button className="custom-slide-button z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none" aria-label="Next slide">▶</button>,
        swipe: isMobile(),
    };

    return (
        <section className="flex flex-col items-center bg-black w-full py-8">
            <h1 className="text-2xl md:text-4xl text-white italic mb-6 text-center">
                Welcome to my Projects!
            </h1>
            <div className="w-full max-w-xl">
                <Slide {...properties}>
                    {slideImages.map((slide, index) => (
                        <div key={index} className="each-slide relative flex justify-center mb-4">
                            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="relative group">
                                <Image src={slide.image} alt={slide.text} width={400} height={250} className="rounded-lg shadow-lg group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                    <div className="font-semibold text-xl mb-2">{slide.text}</div>
                                    <div className="text-base">{slide.additionalText}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    );
};

export default Body;
