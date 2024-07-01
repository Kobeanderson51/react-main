import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-10 inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg relative max-w-3xl w-full mx-4">
                <div className="overflow-y-auto max-h-96 prose" dangerouslySetInnerHTML={{ __html: content }} />

                <div className="flex justify-center mt-4">
                    <button className="text-red-600 px-4 py-2 rounded-md border border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
