import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

export default function Body() {
    const slideImages = [
        { url: '/images/Balance-Tracker.png', link: 'https://react-project-one-indol.vercel.app/' },
        { url: '/images/todo-app.png', link: 'https://to-do-app-seven-ebon.vercel.app/' },
        { url: '/images/Golf-app.png', link: 'https://golf-app-psi.vercel.app/' },
        { url: '/images/API-Server.png', link: '' },
    ];

    const properties = {
        prevArrow: <button className="custom-slide-button z-30">◀</button>,
        nextArrow: <button className="custom-slide-button z-30">▶</button>,
    };

    return (
        <section className="flex flex-col items-center bg-black w-screen p-10">
            <h1 className="text-4xl text-white mb-10 sm: text-3xl">Welcome to my Projects!</h1>
            <div className="w-full max-w-4xl">
                <Slide {...properties}>
                    {slideImages.map((slide, index) => (
                        <div key={index} className="each-slide flex justify-center">
                            <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                <Image src={slide.url} alt="slide" width={500} height={500} />
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    );
}
