const display = document.querySelector(".display");
const newGrid = document.querySelector(".new-grid");

console.log(newGrid);

function createGrid(n) {
    display.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");

        row.classList.add("row");

        for (let j = 0; j < n; j++) {
            const col = document.createElement("div");

            col.classList.add("col");
            
            col.addEventListener('mouseover', (e) => {
                e.target.classList.add("hovered");
            });

            row.appendChild(col);
        }

        display.appendChild(row);
    }
}

newGrid.addEventListener("click", () => {
    console.log('here');
    let n = 0;

    console.log(n > 100);
    console.log(n < 1);
    console.log(isNaN(n));
    while (n > 100 || n < 1 || isNaN(n)) {
        n = +prompt("Enter number of rows");
    }

    createGrid(n);
});

createGrid(8);
