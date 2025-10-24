import React, { useState } from 'react';

type ImageItem = {
    url: string;
    id: number;
};

function MemoryGame() {
    const initialImages: ImageItem[] = [
        { url: '/rasberry.svg', id: 1 },
        { url: '/rasberry.svg', id: 2 },
        { url: '/apple.svg', id: 3 },
        { url: '/apple.svg', id: 4 },
        { url: '/strawberry.svg', id: 5 },
        { url: '/strawberry.svg', id: 6 },
        { url: '/avocado.svg', id: 7 },
        { url: '/avocado.svg', id: 8 },
        { url: '/watermelon.svg', id: 9 },
        { url: '/watermelon.svg', id: 10 },
        { url: '/guava.svg', id: 11 },
        { url: '/guava.svg', id: 12 },
        { url: '/blackberry.svg', id: 13 },
        { url: '/blackberry.svg', id: 14 },
        { url: '/blueberry.svg', id: 15 },
        { url: '/blueberry.svg', id: 16 },
        { url: '/eggplant.svg', id: 17 },
        { url: '/eggplant.svg', id: 18 },
        { url: '/lemon.svg', id: 19 },
        { url: '/lemon.svg', id: 20 },
        { url: '/orange.svg', id: 21 },
        { url: '/orange.svg', id: 22 },
        { url: '/pineapple.svg', id: 23 },
        { url: '/pineapple.svg', id: 24 }
    ];

    const shuffleArray = (arr: ImageItem[]): ImageItem[] => {
        const array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    const [imageUrls, setImageUrls] = useState<ImageItem[]>(() => shuffleArray(initialImages));
    const [flipped, setFlipped] = useState<boolean[]>(Array(initialImages.length).fill(false));
    const [selected, setSelected] = useState<number[]>([]);

    const handleStartGame = () => {
        setImageUrls(shuffleArray(initialImages));
        setFlipped(Array(initialImages.length).fill(false));
        setSelected([]);
    };

    const handleButtonClick = (idx: number) => {
        if (flipped[idx] || selected.includes(idx) || selected.length === 2) return;

        const newSelected = [...selected, idx];
        const newFlipped = [...flipped];
        newFlipped[idx] = true;
        setFlipped(newFlipped);
        setSelected(newSelected);

        if (newSelected.length === 2) {
            const [firstIdx, secondIdx] = newSelected;
            if (imageUrls[firstIdx].url !== imageUrls[secondIdx].url) {
                setTimeout(() => {
                    setFlipped(prev => {
                        const resetFlipped = [...prev];
                        resetFlipped[firstIdx] = false;
                        resetFlipped[secondIdx] = false;
                        return resetFlipped;
                    });
                    setSelected([]);
                }, 1000);
            } else {
                setTimeout(() => setSelected([]), 500);
            }
        }
    };

    return (
        <>
            <div className="memorygameheader">
                <h1 onClick={handleStartGame}>Memory Game</h1>
            </div>
            <div className="memorygamedisplay">
                {imageUrls.map((child, idx) => (
                    <div key={child.id} className="memorygamebutton">
                        <button
                            onClick={() => handleButtonClick(idx)}
                            disabled={flipped[idx] || selected.length === 2}
                        >
                            {flipped[idx] ? 
                                <img src={child.url} width="80" alt="Memory Game" /> : 
                                <img src="/questionmark.svg" width="80" alt="Hidden" />}
                        </button>
                    </div>
                ))}
            </div>
            <hr />
        </>
    );
}

export default MemoryGame;