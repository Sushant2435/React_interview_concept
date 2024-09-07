import React, { useState, useEffect } from 'react';
import Square from './Square';
import Modal from './Tic_tac_modal';
const Tic_tac_toe = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [isWinner, setIsWinner] = useState(null);

    const handleClick = (index) => {
        if (state[index] !== null || isWinner) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const checkWinner = () => {
        const WinnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let logic of WinnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    // Check for a winner when the state changes
    useEffect(() => {
        const winner = checkWinner();
        if (winner) {
            setIsWinner(winner);
        }
    }, [state]);

    const PlayAgain = () => {
        setState(Array(9).fill(null));
        setIsXTurn(true);
        setIsWinner(null);
    };

    return (
        <>
            <h2 className='text-center text-3xl font-bold my-8'>Tic Tac Toe Game</h2>
            <div className={` px-3 py-2 rounded-2xl font-bold text-lg text-center w-1/12 m-auto
                            ${isXTurn ? 'bg-blue-500 text-white animate-bounce' : 'bg-pink-300 text-black'}`}>
                Player X
            </div>

            <div className='flex justify-center items-center my-8'>
                <div className='bg-gray-400 w-[240px] h-[240px] flex flex-wrap items-center'>
                    <Square onClick={() => handleClick(0)} value={state[0]} />
                    <Square onClick={() => handleClick(1)} value={state[1]} />
                    <Square onClick={() => handleClick(2)} value={state[2]} />
                    <Square onClick={() => handleClick(3)} value={state[3]} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} />
                    <Square onClick={() => handleClick(6)} value={state[6]} />
                    <Square onClick={() => handleClick(7)} value={state[7]} />
                    <Square onClick={() => handleClick(8)} value={state[8]} />
                </div>
            </div>

            <div className={` px-3 py-2 rounded-2xl font-bold text-lg m-auto w-1/12 text-center  
                            ${!isXTurn ? 'bg-blue-500 text-white animate-bounce' : 'bg-pink-300 text-black'}`}>
                Player O
            </div>

            <div className='text-end'>
                <button onClick={PlayAgain} className='w-1/12 mr-4 bg-red-400 p-2 mb-10 mt-2 rounded-2xl font-bold text-lg'>Reset Game</button>
            </div>
            {isWinner && (
                <Modal winner={isWinner} onPlayAgain={PlayAgain} />
            )}

        </>
    );
};

export default Tic_tac_toe;
