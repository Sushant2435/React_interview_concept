import React from 'react';

const Modal = ({ winner, onPlayAgain }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Player {winner} won the game!</h2>
                <button
                    onClick={onPlayAgain}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Modal;
