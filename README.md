# Liri app
## LIRI will be a command line node app that takes in parameters and gives you back data.
---
### Liri uses the following commands

- Concert-this
- Spotify-this-song
- Movie-this
- do-what-it says

## Technologies used:
- Spotify API
- OMDB API
- Bands In Town API
- Node.js
- Javascript
- NPM packages

## What Each Command Does
### LIRI searches Bands in Town for concerts, Spotify for songs, and OMDB for movies.

- 1 node liri.js concert-this '<artist/band name here>'

- Searches the Bands in Town Artist Events API for an artist and renders     the following information about each event to the terminal:

   - Name of the venue

   - Venue location

   - Date of the Event (using the format "MM/DD/YYYY")

- 2 node liri.js spotify-this-song '<song name here>'

- Displays the following information about the selected song in your         terminal/bash window

  - Artist(s)
  - The song's name
  - A preview link of the song from Spotify
  - The album containing the song
  - If no song is provided, the program defaults to "The Sign" by Ace of Base.

- 3 node liri.js movie-this '<movie name here>'

  - This will output the following movie information to your terminal/bash window:

  * Title
  * Year movie was released
  * IMDB Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie

 - 4 node liri.js do-what-it-says

 - Runs spotify-this-song for "I Want it That Way".

  ## Maintain and Contributes
  - Larry Nan
<!-- uncomment notes -->
