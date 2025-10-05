const container = document.querySelector ('.container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement ("div");
    square.classList.add("square");
    square.addEventListener("mouseover", event => {
        const firstColor = Math.floor (Math.random()* 256);
        const secondColor = Math.floor (Math.random()* 256);
        const thirdColor = Math.floor (Math.random()* 256);
        event.target.style.background = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
    }); 
    container.appendChild(square);
}

const newGrid = document.getElementById ("new");
newGrid.addEventListener("click", () => {
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
            newSquare.addEventListener("mouseover", event => {
                const firstColor = Math.floor (Math.random()* 256);
                const secondColor = Math.floor (Math.random()* 256);
                const thirdColor = Math.floor (Math.random()* 256);
                event.target.style.background = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
            });
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