const gridContainer = document.querySelector(".container");

drawGrid(16);
pointerOn();
pointerOff();
//const box = document.querySelectorAll(".box");
//box.classList.add("active");

function pointerOn() {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', event => {
        //handle click
        //console.log("Hello");
        box.classList.add("active");
        })
  })
}

function pointerOff() {
    document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseout', event => {
        //handle click
        box.classList.remove("active");
        })
    })
}


const sizeButton = document.querySelector("#btn-change-size");
sizeButton.addEventListener("click", event => {
    const gridSize = prompt("Please select the number of boxes on each side of the grid, from 8 to 100");
    if (gridSize < 8 || gridSize > 100) {
        alert("Incorrect grid size!");
    } else {
        removeAllChildNodes(gridContainer);
        drawGrid(gridSize);
    }
})

function drawGrid(squarePerSide) {
    
    for (row = 0; row < squarePerSide; row++) {
    
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for (column = 0; column < squarePerSide; column++) {
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newRow.appendChild(newBox);
        }
        gridContainer.appendChild(newRow);
    }
    pointerOn();
    pointerOff();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        //wait(100);
        parent.removeChild(parent.firstChild);
    }
}