document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    searchMovies(query);
  });

  async function searchMovies(query) {
    console.log(query)
    const apiKey = 'c86dfea7';
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c86dfea7`);
    const data = await response.json();
    displayMovies(data.Search);
  }

  function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear previous results
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
  }

//   if (!movies) {
//     movieList.innerHTML = '<p>No movies found</p>';
//   }