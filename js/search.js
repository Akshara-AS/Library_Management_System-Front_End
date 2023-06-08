var searchIcon = document.getElementById("searchIcon");
var searchContainer = document.getElementById("searchContainer");
var searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
  searchInput.focus();
});

searchInput.addEventListener("input", function () {
  var searchText = searchInput.value.trim().toLowerCase();
  filterBooks(searchText);
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var searchText = searchInput.value.trim().toLowerCase();
    filterBooks(searchText);
  }
});

function filterBooks(searchText) {
    // Get the container element where the filtered books will be displayed
    const bookContainer = document.getElementById('bookContainer');
  
    // Clear the previous results
    bookContainer.innerHTML = '';
  
    // Perform filtering logic - user can search by title, author, genre
    const filteredBooks = books.filter((book) => {
      const { title, author, genre } = book;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        author.toLowerCase().includes(searchText.toLowerCase()) ||
        genre.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  
    // Display the filtered books as cards
    filteredBooks.forEach((book) => {
      const card = createBookCard(book);
      bookContainer.appendChild(card);
    });
  
    // Display the count of filtered books
    const count = filteredBooks.length;
    const countElement = document.getElementById('bookCount');
    countElement.textContent = count > 0 ? `Total Books: ${count}` : 'Sorry! No results found';
  }
  
