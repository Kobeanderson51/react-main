import { useState } from 'react';
import Modal from './modal';
import ContactForm from './contactform';

export default function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const openModal = (content: JSX.Element) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <nav className='fixed bg-slate-300 bg-blur rounded top-0'>
            <ul className="flex w-screen justify-center">
                <li className="p-2 text-black italic hover:underline">
                    <a className='cursor-pointer' onClick={closeModal}>Home</a>
                </li>
                <li className="p-2 text-black italic hover:underline">
                    <a 
                        className='cursor-pointer'
                        href="#" 
                        onClick={() => openModal(
                            <div className="max-w-2xl mx-auto p-6 flex flex-col justify-center">
                                <h1 className="text-center text-3xl font-bold mb-6">About Me</h1>
                                <p className="mb-8 leading-7">
                                    Hello, my name is Kobe Anderson and I&apos;m currently enrolled in MTEC for web development. I am passionate about continuous learning and strive for excellence in my work. I aim to leverage my skills in web development to create innovative solutions and contribute meaningfully to impactful projects.
                                </p>
                                <div className="max-w-md mx-auto mb-8">
                                    <h2 className="text-center text-2xl font-bold mb-4">Skills</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>HTML</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>CSS</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>JavaScript</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>React</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>Node.js</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>Express</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>MongoDB</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <span>SQL</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-md mx-auto mb-8 grid grid-cols-2 gap-4">
                                    <h2 className="text-center text-2xl font-bold mb-4 col-span-2">Hobbies</h2>
                                    <div className="mb-2">Snowboarding</div>
                                    <div className="mb-2">Golf</div>
                                    <div className="mb-2">Video Games</div>
                                    <div className="mb-2">Hiking</div>
                                </div>

                                <div className="max-w-md mx-auto mb-8">
                                    <h2 className="text-center text-2xl font-bold mb-4">Education</h2>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">MTEC - Web Development</h3>
                                        <p className="mb-2">Currently enrolled</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Springville High School</h3>
                                        <p className="mb-2">Graduated in 2021</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        About
                    </a>
                </li>
                <li className="p-2 text-black italic hover:underline">
                    <a 
                        className='cursor-pointer'
                        href="#" 
                        onClick={() => openModal(
                            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Contact Information</h1>
                                <ul className="divide-y divide-gray-300">
                                    <li className="py-2 flex items-center">
                                        <span className="font-semibold text-gray-700 w-24">Email:</span>
                                        <span id="email" className="text-gray-600">Kobeanderson51@gmail.com</span>
                                    </li>
                                    <li className="py-2 flex items-center">
                                        <span className="font-semibold text-gray-700 w-24">Phone:</span>
                                        <span className="text-gray-600">(385)-250-6525</span>
                                    </li>
                                    <li className="py-2 flex items-center">
                                        <span className="font-semibold text-gray-700 w-24">LinkedIn:</span>
                                        <a className="text-blue-400 hover:underline" target="_blank" href="https://www.linkedin.com/in/kobe-anderson-604343309/">Kobe Anderson</a>
                                    </li>
                                    <li className="py-2 flex items-center">
                                        <span className="font-semibold text-gray-700 w-24">GitHub:</span>
                                        <a className="text-blue-400 hover:underline" target="_blank" href="https://github.com/Kobeanderson51">KobeAnderson51</a>
                                    </li>
                                    <li className="py-5 flex items-center justify-center">
                                        <button 
                                            className="bg-blue-400 text-white py-2 px-4 rounded-lg w-fit"
                                            onClick={() => openModal(<ContactForm />)}
                                        >
                                            Contact Me
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent || <div />} />
        </nav>
    );
}
