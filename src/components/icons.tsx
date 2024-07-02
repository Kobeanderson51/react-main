import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Icons: React.FC = () => {
    return (
        <div className="flex space-x-6 mb-8">
            <a href="https://github.com/Kobeanderson51" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
                <FontAwesomeIcon icon={faGithub} className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/kobe-anderson-604343309/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
            </a>
        </div>
    );
};

export default Icons;
