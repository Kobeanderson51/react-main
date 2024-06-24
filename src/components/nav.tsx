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

    return (
        <nav className='fixed'>
            <ul className="flex w-screen justify-center bg-slate-900/30">
                <li className="p-2 text-black italic hover:text-white hover:underline">
                        <a onClick={closeModal}>Home</a>
                </li>
                <li className="p-2 text-black italic hover:text-white hover:underline">
                    <a 
                        href="#" 
                        onClick={() => openModal(`
                            
                            <h1 class="flex justify-center p-2 ">About Me</h1>
                            <p>I'm currently enrolled in MTEC for web development, eager to harness my skills and knowledge in this field.
                            I'm passionately seeking a career that allows me to apply my expertise in web development to create innovative solutions and
                            contribute meaningfully to projects. My journey into web development has been fueled by a desire for continuous learning
                            and a commitment to excellence.</p>
                            `)}
                    >
                        About
                    </a>
                </li>
                <li className="p-2 text-black italic hover:text-white hover:underline">
                    <a 
                        href="#" 
                        onClick={() => openModal(`
                            
                            <h1 class="flex justify-center p-2 ">Contact Information</h1>
                            <ul>
                                <li>Email: Kobeanderson51@gmail.com</li>
                                <li>Phone: 385-250-6525</li>
                                <li>LinkedIn: <a class="text-blue-400" target="_blank" href="https://www.linkedin.com/in/kobe-anderson-604343309/">Kobe Anderson</a></li>
                                <li>GitHub: <a class="text-blue-400" target="_blank" href="https://github.com/Kobeanderson51">KobeAnderson51</a></li>
                            </ul>
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
