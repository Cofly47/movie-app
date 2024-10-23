  let currentPage = 1;
  let totalPages = 0;
  let isLoading = false;

  document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query.length < 3) return;
    handleSearch(query);
  });

  document.getElementById('search-input').addEventListener('keydown', function(e) {
    const query = document.getElementById('search-input').value;
    if (e.key === "Enter" && query.length >= 3) {
      handleSearch(query);
    } 
  });

  function handleSearch(query) {
    document.getElementById('movie-list').innerHTML = "";
    currentPage = 1;
    searchMovies(query);
  }

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
        <div class="movie-card" onclick="openModal('${movie.imdbID}')"> 
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

   // Open Modal
   function openModal(movieId) {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'flex';
    searchMovieDetails(movieId);
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}


async function searchMovieDetails(movieId) {
  const apiKey = 'c86dfea7';
  const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
  const data = await response.json();
  displayMovieDetails(data);
}

function displayMovieDetails(movie) {
  const movieDetails = document.getElementById('movie-details');
  movieDetails.innerHTML = ''; // Clear previous results

  movieDetails.innerHTML = ` 
      <div class="movie-detail-header"> 
        <img src="${movie.Poster}" alt="${movie.Title}" class="movie-detail-header-img">
        <div class="movie-detail-header-title">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      </div>
    `;

    if (!movies) {
    movieList.innerHTML = '<p>No movie details found</p>';
  }
}