// Function to toggle the search box visibility
function toggleSearchBox() {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.toggle("active");
  }
  
  // Event listener for the search icon click event
  document.getElementById("searchIcon").addEventListener("click", toggleSearchBox);
  
  // Event listener for the search button click event
  document.getElementById("searchButton").addEventListener("click", searchBooks);
  
  // Event listener for the enter key press event
  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      searchBooks();
    }
  });
  
  // Function to search books
  function searchBooks() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var filteredBooks = books.filter(function (book) {
      return (
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.genre.toLowerCase().includes(searchInput)
      );
    });
  
    var filteredPage = document.getElementById("filteredBooks");
    filteredPage.innerHTML = "";
  
    if (filteredBooks.length > 0) {
      filteredBooks.forEach(function (book) {
        var card = createCard(book);
        filteredPage.appendChild(card);
      });
    } else {
      var noMatchElement = document.createElement("p");
      noMatchElement.innerHTML = "Sorry, No matches found!";
      filteredPage.appendChild(noMatchElement);
    }
  }
  
