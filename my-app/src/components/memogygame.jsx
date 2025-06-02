import React, { useState } from 'react';

function MemoryGame() {
    const [show, setShow] = useState(true);

    const imageUrls = [
        { "url": './public/rasberry.svg', "id": 1 },
        { "url": './public/rasberry.svg', "id": 2 },
        { "url": './public/apple.svg', "id": 3 },
        { "url": './public/apple.svg', "id": 4 },
        { "url": './public/strawberry.svg', "id": 5 },
        { "url": './public/strawberry.svg', "id": 6 },
        { "url": './public/avocado.svg', "id": 7 },
        { "url": './public/avocado.svg', "id": 8 },
        { "url": './public/watermelon.svg', "id": 9 },
        { "url": './public/watermelon.svg', "id": 10 },
        { "url": './public/guava.svg', "id": 11 },
        { "url": './public/guava.svg', "id": 12 },
        { "url": './public/blackberry.svg', "id": 13 },
        { "url": './public/blackberry.svg', "id": 14 },
        { "url": './public/blueberry.svg', "id": 15 },
        { "url": './public/blueberry.svg', "id": 16 },
        { "url": './public/eggplant.svg', "id": 17 },
        { "url": './public/eggplant.svg', "id": 18 },
        { "url": './public/lemon.svg', "id": 19 },
        { "url": './public/lemon.svg', "id": 20 },
        { "url": './public/orange.svg', "id": 21 },
        { "url": './public/orange.svg', "id": 22 },
        { "url": './public/pineapple.svg', "id": 23 },
        { "url": './public/pineapple.svg', "id": 24 }
    ];

    const shuffleArray = (imageUrls) => {
        for (let i = imageUrls.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
        }
        return imageUrls;
    }

    const handleButtonClick = (child) => {
        console.log(child.id);
    };


    return (
        <div>
            <div className="memorygameheader">
                <h1>Memory Game</h1>
            </div>
            <div className="memorygamedisplay">
                {imageUrls.map((child) => (
                    <div key={child.id} className="memorygamebutton" onClick={() => handleButtonClick(child)}>
                        <button>{show ? <img src={child.url} width="80" alt="Memory Game" /> : <img src="./public/questionmark.svg" width="80" alt="Memory Game" />}</button>
                    </div>
                ))}
            </div>
            <button onClick={() => shuffleArray(imageUrls)}>Start Game</button> shuflaa kortit shuffleArraylla 
        </div>
    );
}

export default MemoryGame;