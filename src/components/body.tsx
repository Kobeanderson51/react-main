import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

export default function Body() {
    const slideImages = [
        '/images/Balance-Tracker.png',
        '/images/todo-app.png',
        '/images/Golf-app.png',
    ];

    return (
        <section className="flex flex-col items-center bg-black w-screen p-10">
            <h1 className="text-4xl text-white mb-10">Welcome to my Projects!</h1>
            <div className="w-full max-w-4xl">
                <Slide>
                    {slideImages.map((each, index) => (
                        <div key={index} className="each-slide flex justify-center">
                            <Image src={each} alt="slide" width={500} height={500}/>
                        </div> 
                    ))}
                </Slide> 
            </div>
        </section>
    );
}
