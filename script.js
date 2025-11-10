document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const dataTable = document.getElementById('dataTable');
    const rows = dataTable.getElementsByTagName('tr');
  
    searchInput.addEventListener('keyup', function(event) {
      const searchText = event.target.value.toLowerCase();
      for (let i = 1; i < rows.length; i++) { // Start from 1 to skip header row
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        let found = false;
        for (let j = 0; j < cells.length; j++) {
          const cell = cells[j];
          if (cell.textContent.toLowerCase().includes(searchText)) {
            found = true;
            break;
          }
        }
        if (found) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    });
  });
  