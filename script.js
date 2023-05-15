const gridContainer = document.querySelector(".container");

drawGrid(16);

function drawGrid(squarePerSide) {
    
    for (row = 0; row < squarePerSide; row++) {
    
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for (column = 0; column < squarePerSide; column++) {
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.innerText = column;
            newRow.appendChild(newBox);
        }
        gridContainer.appendChild(newRow);
    }
}