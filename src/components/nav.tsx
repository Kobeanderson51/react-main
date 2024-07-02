import { SetStateAction, useState } from 'react';
import Modal from './modal';


export default function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content: SetStateAction<string>) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text).then(() => alert(`Copied the text: ${text}`));
    };

    return (
        <nav className='fixed'>
            <ul className="flex w-screen justify-center">
                <li className="p-2 text-black italic hover:text-white hover:underline">
                    <a onClick={closeModal}>Home</a>
                </li>
                <li className="p-2 text-black italic hover:text-white hover:underline">
                    <a 
                        href="#" 
                        onClick={() => openModal(`
                            <div class="max-w-2xl mx-auto p-6 flex flex-col justify-center">
                                <h1 class="text-center text-3xl font-bold mb-6">About Me</h1>
                                <p class="mb-8 leading-7">
                                    Hello, my name is Kobe Anderson and I'm currently enrolled in MTEC for web development. I am passionate about continuous learning and strive for excellence in my work. I aim to leverage my skills in web development to create innovative solutions and contribute meaningfully to impactful projects.
                                </p>
                                <div class="max-w-md mx-auto mb-8">
                                    <h2 class="text-center text-2xl font-bold mb-4">Skills</h2>
                                    <div class="grid grid-cols-3 gap-3">
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>HTML</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>CSS</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>JavaScript</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>React</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>Node.js</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>Express</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>MongoDB</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="mr-2">•</span>
                                            <span>SQL</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="max-w-md mx-auto mb-8 grid grid-cols-2 gap-4">
                                    <h2 class="text-center text-2xl font-bold mb-4 col-span-2">Hobbies</h2>
                                    <div class="mb-2">Snowboarding</div>
                                    <div class="mb-2">Golf</div>
                                    <div class="mb-2">Video Games</div>
                                    <div class="mb-2">Hiking</div>
                                </div>

                                <div class="max-w-md mx-auto mb-8">
                                    <h2 class="text-center text-2xl font-bold mb-4">Education</h2>
                                    <div>
                                        <h3 class="text-lg font-semibold mb-2">MTEC - Web Development</h3>
                                        <p class="mb-2">Currently enrolled</p>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold mb-2">Springville High School</h3>
                                        <p class="mb-2">Graduated in 2021</p>
                                    </div>
                                </div>
                            </div>
                        `)}
                    >
                        About
                    </a>
                </li>
                <li className="p-2 text-black italic hover:text-white hover:underline">
                    <a 
                        href="#" 
                        onClick={() => openModal(`
                            <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                                <h1 class="text-2xl font-bold text-center mb-4 text-gray-800">Contact Information</h1>
                                <ul class="divide-y divide-gray-300">
                                    <li class="py-2 flex items-center">
                                        <span class="font-semibold text-gray-700 w-24">Email:</span>
                                        <span id="email" class="text-gray-600">Kobeanderson51@gmail.com</span>
                                    </li>
                                    <li class="py-2 flex items-center">
                                        <span class="font-semibold text-gray-700 w-24">Phone:</span>
                                        <span class="text-gray-600">(385)-250-6525</span>
                                    </li>
                                    <li class="py-2 flex items-center">
                                        <span class="font-semibold text-gray-700 w-24">LinkedIn:</span>
                                        <a class="text-blue-400 hover:underline" target="_blank" href="https://www.linkedin.com/in/kobe-anderson-604343309/">Kobe Anderson</a>
                                    </li>
                                    <li class="py-2 flex items-center">
                                        <span class="font-semibold text-gray-700 w-24">GitHub:</span>
                                        <a class="text-blue-400 hover:underline" target="_blank" href="https://github.com/Kobeanderson51">KobeAnderson51</a>
                                    </li>
                                </ul>
                            </div>
                        `)}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </nav>
    );
}
