const display = document.querySelector(".display");

for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (let j = 0; j < 8; j++) {
        const col = document.createElement("div");

        col.classList.add("col");

        row.appendChild(col);
    }

    display.appendChild(row);
}
