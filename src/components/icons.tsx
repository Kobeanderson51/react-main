import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Icons: React.FC = () => {
    return (
        <div className='flex flex-row mb-4'>
            <a href="https://github.com/Kobeanderson51" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='mx-2 text-3xl mb-6' />
            </a>
            <a href="https://www.linkedin.com/in/kobe-anderson-604343309/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='mx-2 text-3xl mb-6 text-blue-400' />
            </a>
        </div>
    );
};

export default Icons;
