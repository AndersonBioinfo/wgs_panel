document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const dataTable = document.getElementById("dataTable");
  const rows = Array.from(dataTable.querySelectorAll("tbody tr"));

  const sortAscBtn = document.getElementById("sortAsc");
  const sortDescBtn = document.getElementById("sortDesc");

  // Search functionality
  searchInput.addEventListener("keyup", function (event) {
    const searchText = event.target.value.toLowerCase();
    rows.forEach((row) => {
      const cells = Array.from(row.getElementsByTagName("td"));
      const found = cells.some((cell) =>
        cell.textContent.toLowerCase().includes(searchText)
      );
      row.style.display = found ? "" : "none";
    });
  });

  // Sort functionality
  const sortTable = (ascending) => {
    const sortedRows = rows.sort((a, b) => {
      const aVal = parseFloat(a.cells[2].textContent);
      const bVal = parseFloat(b.cells[2].textContent);
      return ascending ? aVal - bVal : bVal - aVal;
    });

    // Update table and re-number S.No
    sortedRows.forEach((row, index) => {
      row.cells[0].textContent = index + 1;
      dataTable.querySelector("tbody").appendChild(row);
    });
  };

  sortAscBtn.addEventListener("click", () => sortTable(true));
  sortDescBtn.addEventListener("click", () => sortTable(false));
});
