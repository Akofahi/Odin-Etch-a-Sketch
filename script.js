const gridContainer = document.querySelector('.grid');
        const btn = document.querySelector('#btn');
        let maxRows = 16;
        let maxColumns = 16;

        function createGrid(rows, columns) {
            // Clear any existing grid
            gridContainer.innerHTML = '';

            // Create the grid with specified rows and columns
            for (let i = 0; i < rows; i++) {
                const row = document.createElement('div');
                row.className = 'row';
                
                for (let j = 0; j < columns; j++) {
                    const box = document.createElement('div');
                    box.className = 'box';
                    row.appendChild(box);
                }

                gridContainer.appendChild(row);
            }
        }

        // Initial grid creation
        createGrid(maxRows, maxColumns);

        btn.addEventListener('click', () => {
            do {
                maxRows = prompt("Enter number of Rows (less than 100):", maxRows);
                maxColumns = prompt("Enter number of Columns (less than 100):", maxColumns);
            } while (maxRows >= 100 || maxColumns >= 100);

            // Update the grid with the new rows and columns
            createGrid(maxRows, maxColumns);
        });