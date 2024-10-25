# Movie Search Application
This is a web-based movie search application that allows users to search for movies using the OMDb API. The application features an infinite scrolling mechanism for loading multiple pages of results and a modal window that displays detailed information about a selected movie.

# Features
Search Movies: Search for movies by typing in the search bar. The results are fetched from the OMDb API.
Infinite Scroll: As the user scrolls down the page, more movie results are automatically fetched and displayed.
Movie Details Modal: When a user clicks on a movie card, a modal opens displaying the movie's detailed information, including the title, rating, genre, plot, and cast.
# Project Structure
```
├── index.html       # The main HTML file
├── app.js           # JavaScript file that contains the logic for fetching data and displaying results
├── style.css        # The CSS file that styles the application
└── README.md        # Project documentation
index.html
```
#### The main HTML file contains:

A search input for users to search for movies.
A button that triggers the search.
A list container (#movie-list) where movie cards are dynamically injected.
A modal (#cartModal) that displays detailed movie information when a movie card is clicked.
app.js
This file contains the core functionality:

## Search Functionality:
On clicking the search button or pressing the "Enter" key, the searchMovies() function is called. It fetches movies based on the user's query from the OMDb API and displays them in the movie list.
## Infinite Scroll:
The application listens for scroll events using the handleScroll() function. When the user scrolls to the bottom, the next page of movie results is fetched and displayed.
Movie Details Modal:
When a user clicks on a movie card, the openModal() function fetches the details of that specific movie (by its IMDb ID) and displays the details in a modal window.
style.css
This file contains the styles for the application, including layout styling for the search bar, movie cards, and modal. The key elements styled include:

#### Movie Cards: Each movie result is displayed as a card with the poster, title, and release year.
#### Modal: The modal design for displaying movie details when a movie card is clicked.
## How It Works
Search Movies: Enter a movie name in the search bar and press "Enter" or click the search button. This triggers the searchMovies() function, which fetches the first page of search results from the OMDb API.

#### Infinite Scrolling: As you scroll down the page, additional results (next pages) are automatically fetched and appended to the movie list. This continues until all available pages are loaded.

#### Movie Details: Click on any movie card to open a modal that displays detailed information about that movie, such as the title, IMDb rating, genre, plot, and cast. Close the modal by clicking the "X" button.

## Setup Instructions

OMDb API Key: You need an API key from the OMDb API to make requests. You can get one by signing up at http://www.omdbapi.com/. Replace the placeholder API key in app.js:

const apiKey = 'YOUR_API_KEY';
Run the Application: Simply open the index.html file in your browser to run the application locally.

Dependencies
OMDb API: The application fetches movie data from the OMDb API.
Font Awesome: For search icon styling.