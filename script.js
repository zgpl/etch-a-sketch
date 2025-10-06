const container = document.querySelector ('.container');

function randomColor(event) {
    const firstColor = Math.floor (Math.random()* 256);
    const secondColor = Math.floor (Math.random()* 256);
    const thirdColor = Math.floor (Math.random()* 256);
    event.target.style.background = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
}

for (let i = 0; i < 256; i++) {
    const square = document.createElement ("div");
    square.classList.add("square");
    square.addEventListener("mouseover", randomColor); 
    container.appendChild(square);
}

// useful feedback that i will not apply this time but will want to find later:
// Consider using ‘event delegation’ to target the squares instead of adding them in a loop. 
// It’s fine for a low number like ‘256’, but when you are adding event listeners to 
// higher numbers like ‘100 × 100’ squares - that might make the browser sluggish.

const newGridButton = document.getElementById ("new");
newGridButton.addEventListener("click", () => {
    const promptUser = prompt ("Select a new grid size between 1 and 100");
    const num = Number(promptUser);
    if (promptUser === null) {
        return;
    }
    else if (!isNaN(num) && num >= 1 && num <= 100) {
        container.innerHTML = "";
        for (let i = 0; i < num * num; i++) {
            const newSquare = document.createElement ("div");
            newSquare.classList.add("square");
            const newSquareSize = 480 / num;
            newSquare.style.width = `${newSquareSize}px`;
            newSquare.style.height = `${newSquareSize}px`;
            newSquare.addEventListener("mouseover", randomColor);
            container.appendChild(newSquare);
        }
    } else {
        alert ("knock that out buddy!")
    }
});

const clear = document.getElementById ("clear");
clear.addEventListener("click", () => {
    const squares = document.querySelectorAll ('.square');
    squares.forEach(square => {
    square.style.background = "honeydew";
    })
});