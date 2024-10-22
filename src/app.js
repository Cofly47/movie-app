  let currentPage = 1;
  let totalPages = 0;
  let isLoading = false;

  document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    console.log(query)
    searchMovies(query);
  });

  async function searchMovies(query) {
    if (isLoading) return;  
       isLoading = true;
    const apiKey = 'c86dfea7';
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}&page=${currentPage}`);
    const data = await response.json();
    totalPages = Math.ceil(data.totalResults / 10);
    displayMovies(data.Search);
    isLoading = false
  }

  function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    // movieList.innerHTML = ''; // Clear previous results
    movies?.forEach(movie => {
      const movieCard = `
        <div class="movie-card">
          <img src="${movie.Poster}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      `;
      movieList.innerHTML += movieCard;
    });
    if (!movies) {
      movieList.innerHTML = '<p>No movies found</p>';
    }
  }

  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      console.log("a")
        if (currentPage < totalPages) {
            currentPage++;  // Increment to next page
            const query = document.getElementById('search-input').value;
            if (query) {
                searchMovies(query);  // Fetch the next page of results
                
              }
            }
          }
        }
  window.addEventListener('scroll', handleScroll);