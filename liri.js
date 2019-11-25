require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
const fs = require('fs');
const axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format();

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

let [, , command] = process.argv //array destructuring
let query = process.argv.slice(3).join(" ")
// getUserInput()

// function getUserInput() {
switch (command) {
    case `concert-this`:
        concertThis()
        break;
    case `spotify-this-song`:
        spotifyIt()
        break;
    case `movie-this`:
        movieIt()
        break;
    case `do-what-it-says`:
        doIt()
        break;

    default:
        console.log("you are no good at command line, inquirer will help") //bonus inquirer
        break;
}
// }

function concertThis() {
    const url = "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp"
    axios.get(url).then(res => {
        console.log(res.data[0].venue.city);
        console.log(res.data[0].venue.name);
        console.log(res.data[0].datetime);
    });
}

function spotifyIt() {
    spotify.search({
        type: 'track',
        query, //array literal version of query:query
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(`the artist is ${data.tracks.items[0].artists[0].name}`);
        console.log(`the song's name is ${data.tracks.items[0].name}`);
        console.log(`the preview link of the song is ${data.tracks.items[0].preview_url}`);
        console.log(`the album is from ${data.tracks.items[0].album.name}`);
    });

}

function movieIt() {
    //json search for the root of the movie from OMDb
    // `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
    const url = 'http://www.omdbapi.com/' +
        `?apikey=trilogy` +
        `&t=${query}`

    axios.get(url).then(res => {
        console.log(res.data)
        console.log(res.data.Title);
        console.log(res.data.Year);
        console.log(res.data.imdbRating);
        console.log(res.data.Country);
        console.log(res.data.Language);
        console.log(res.data.Plot);
        console.log(res.data.Actors);
    });
}

function doIt() {
    fs.readFile('random.txt', (err, data) => {
        if (err) throw err;
        // console.log(data.toString().split("\n"));
        // console.log("doing")
        let comArr = data.toString().split(",");
        let com = comArr[0];
        let com1 = comArr[1];
        // use fs to read the file
        // it will return a string, which we will .split(",")
        // call getUserInput()
    });
}