document.addEventListener("DOMContentLoaded", function() {
    buildBoard(16);
    console.log("Hello");
    let SelectGridSize = document.querySelector(".select");
    let message = document.querySelector("#msg");
    SelectGridSize.addEventListener("click", function() {
        let gridSize = prompt("Select the grid size between 1-100");
        if(gridSize == ""){
        	message.innerHTML = "Please select the grid size";
        }
        else if(gridSize < 1 || gridSize > 100){
        	message.innerHTML = "Please select size between 1-100";
        }
        else{
        	buildBoard(gridSize);
        	message.innerHTML = "Your grid is ready";
        }
    });

});

function buildBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
};

function colorDiv(){
	 
}