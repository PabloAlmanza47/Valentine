import { useState } from 'react';

export default function MovingButton() {
    const [position, setPosition] = useState({top: 50, left:50 })
    const [clicked, setClicked] = useState(false);

    const moveButton = () => {
        const newTop = Math.random() * 60 + 10;
        const newLeft = Math.random() *60 + 10;

        setPosition({top:newTop, left:newLeft});
    };

    return (
        !clicked ? (
            <div className="fixed inset-0 h-screen w-screen">
                <button onMouseEnter={moveButton} onClick={() => setClicked(true)} className="bg-amber-700 rounded-xl absolute transition-all duration-300 text-boxColor py-2 px-1" style={{top: `${position.top}%`, left: `${position.left}%`}}> Click me if you can </button>
            </div>
        ) : (
            <div onClick={() => setClicked(false)} className="bg-red-500 text-center"> You clicked me </div>
        )

        
        
    );
}