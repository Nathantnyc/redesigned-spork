// Function to render data from Google Sheets
function renderSheet1(data) {
    const rows = data.split('\n').map(row => row.split(','));

    const thead = document.querySelector('#sheet1-table thead');
    const tbody = document.querySelector('#sheet1-table tbody');

    // Clear previous table content
    thead.innerHTML = '';
    tbody.innerHTML = '';

    // Create header row
    const headerRow = document.createElement('tr');
    rows[0].forEach(cell => {
        const th = document.createElement('th');
        th.textContent = cell.trim();
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create data rows
    for (let i = 1; i < rows.length; i++) {
        const tr = document.createElement('tr');
        rows[i].forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell.trim();
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    }
}

// Function to fetch data from Google Sheets and render table
function loadSheet1() {
    fetch(https://docs.google.com/spreadsheets/d/e/2PACX-1vR0sAgimg-p5v6wA7J7nHY6vy3b6-Af8qCNSc-tXJxmGjaUq9CVKfpymkns5Rlsejk4zIF3F5QZk7W3/pubhtml)
        .then(response => response.text())
        .then(data => renderSheet1(data));
}

// Function to filter table rows based on search input
function filterTable() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const table = document.getElementById('sheet1-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let shouldShow = false;
        const cells = rows[i].getElementsByTagName('td');

        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toUpperCase() || cells[j].innerText.toUpperCase();
            if (cellText.indexOf(input) > -1) {
                shouldShow = true;
                break;
            }
        }

        rows[i].style.display = shouldShow ? '' : 'none';
    }
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('keyup', filterTable);

// Event listener to load data when DOM content is loaded
document.addEventListener('DOMContentLoaded', loadSheet1);
