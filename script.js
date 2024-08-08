function calculateLoveScore() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (!name1 || !name2) {
        document.getElementById('result').innerText = "Please enter both names.";
        return;
    }

    // Display the calculating message
    document.getElementById('result').innerText = "Calculator is calculating your score..... Please wait.";

    // Simulate a delay of 5 seconds
    setTimeout(() => {
        // Combine names and convert to lowercase
        const combinedName = (name1 + name2).toLowerCase();

        // Define characters to count
        const loveChars = ['l', 'o', 'v', 'e'];

        // Count occurrences of 'l', 'o', 'v', and 'e'
        let countLove = 0;
        loveChars.forEach(char => {
            countLove += combinedName.split(char).length - 1;
        });

        // Define characters to count for the second part
        const trueChars = ['t', 'r', 'u', 'e'];
        
        // Count occurrences of 't', 'r', 'u', and 'e'
        let countTrue = 0;
        trueChars.forEach(char => {
            countTrue += combinedName.split(char).length - 1;
        });

        // Calculate the love score
        const score = Math.min(100, (countLove * 10 + countTrue * 10) % 100);

        // Display messages based on the score
        let message = '';

        if (score < 40) {
            message = `${name1} and ${name2}, your love score is low, but that just means there's room for growth!`;
        } else if (score < 60) {
            message = `${name1} and ${name2}, there's potential here! With some effort, your bond can strengthen.`;
        } else if (score < 80) {
            message = `${name1} and ${name2}, The universe smiles upon you both—together, you create magic and harmony that makes the world a better place.`;
        } else {
            message = `${name1} and ${name2}, your love score is fantastic! You two are a perfect match.`;
        }

        document.getElementById('result').innerText = `Your love score is ${score}. ${message}`;
    }, 5000); // 5000 milliseconds = 5 seconds
}

window.onload = function() {
    const numberOfHearts = 55;
    const body = document.body;
    const hearts = []; // Array to store heart positions

    function getUniquePosition() {
        let x, y, isUnique;
        do {
            isUnique = true;
            x = Math.random() * (window.innerWidth - 60); // 60 is the heart's width
            y = Math.random() * (window.innerHeight - 70); // 60 is the heart's height

            for (const pos of hearts) {
                // Check if new position is too close to existing ones
                if (Math.abs(pos.x - x) < 60 && Math.abs(pos.y - y) < 60) {
                    isUnique = false;
                    break;
                }
            }
        } while (!isUnique);
        return { x, y };
    }

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-outline';

        // Get unique position
        const { x, y } = getUniquePosition();
        hearts.push({ x, y }); // Store position

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;

        body.appendChild(heart);
    }
};
