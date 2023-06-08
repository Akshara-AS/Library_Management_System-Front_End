let currentPage = 1;
var totalPages = 3;

function showPage(pageNumber) {
  // Remove active class from all page buttons
  var pageButtons = document.getElementsByClassName("pageBtn");
  for (var i = 0; i < pageButtons.length; i++) {
    pageButtons[i].classList.remove("active");
  }

  // Add active class to the selected page button
  var selectedPageButton = document.getElementById("pageBtn" + pageNumber);
  selectedPageButton.classList.add("active");

  // Hide the current page
  var currentPageElement = document.getElementById("page" + currentPage);
  currentPageElement.classList.remove("active");

  // Show the selected page
  var selectedPageElement = document.getElementById("page" + pageNumber);
  selectedPageElement.classList.add("active");

  currentPage = pageNumber;
}

// Show the initial page
showPage(currentPage);

// Function to navigate to the next page
function nextPage() {
  var nextPageNumber = currentPage + 1;
  if (nextPageNumber <= totalPages) {
    showPage(nextPageNumber);
  }
}

// Function to navigate to the previous page
function previousPage() {
  var previousPageNumber = currentPage - 1;
  if (previousPageNumber >= 1) {
    showPage(previousPageNumber);
  }
}
