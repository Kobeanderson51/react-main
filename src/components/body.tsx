import React from 'react';
import { Slide } from 'react-slideshow-image'; // Ensure 'react-slideshow-image' is installed and imported correctly
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image'; // Import 'next/image' for optimized image loading

export default function Body() {
    const slideImages = [
        { image: '/images/balance-tracker.jpg', link: 'https://react-project-one-indol.vercel.app/', text: 'Balance Tracker', additionalText: 'This Project was done with React.js' },
        { image: '/images/todo-app.png', link: 'https://to-do-app-seven-ebon.vercel.app/', text: 'To-Do App', additionalText: 'This project was done with plain JavaScript' },
        { image: '/images/API-Server.png', link: '', text: 'API Server', additionalText: 'This Project was done with Node.js' },
        { image: '/images/Golf-app.png', link: 'https://golf-app-psi.vercel.app/', text: 'Golf App', additionalText: 'This project was done with plain JavaScript' },
    ];

    const properties = {
        prevArrow: <button className="custom-slide-button z-30 text-black">◀</button>,
        nextArrow: <button className="custom-slide-button z-30 text-black">▶</button>,
    };

    return (
        <section className="flex flex-col items-center bg-black w-screen p-10">
            <h1 className="text-4xl text-white italic mb-10 transition-all duration-300 hover:scale-110 whitespace-nowrap text-center sm:text-4xl md:text-4xl lg:text-5xl">
                Welcome to my Projects!
            </h1>
            <div className="w-screen max-w-2xl z-auto">
                <Slide {...properties}>
                    {slideImages.map((slide, index) => (
                        <div key={index} className="each-slide relative flex justify-center z-60">
                            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="relative">
                                <Image src={slide.image} alt="slide" width={500} height={500} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
                                    <div>{slide.text}</div>
                                    <div className="text-lg mt-2">{slide.additionalText}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    );
}
