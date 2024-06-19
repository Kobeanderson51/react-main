import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

export default function Modal({ isOpen, onClose, content }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-x-0 top-10 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-black p-5 rounded-lg shadow-lg relative max-w-lg w-full mx-4 flex flex-col-reverse">
                <button className="text-red-600" onClick={onClose}>
                    Close
                </button>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}
