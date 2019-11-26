require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
const fs = require('fs');
const axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format()

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

let [, , command] = process.argv //array destructuring
let query = process.argv.slice(3).join(" ")
getUserInput(command, query)

function getUserInput(com, input) {
    switch (com) {
        case `concert-this`:
            concertThis(input)
            break;
        case `spotify-this-song`:
            spotifyIt(input)
            break;
        case `movie-this`:
            movieIt(input)
            break;
        case `do-what-it-says`:
            doIt()
            break;

        default:
            console.log("you are no good at command line, inquirer will help") //bonus inquirer
            break;
    }
    // }

    function concertThis(search) {
        // console.log(query);
        const url = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
        axios.get(url).then(res => {
            console.log(`Venue location is ${res.data[0].venue.city}`);
            console.log(`Name of the venue is ${res.data[0].venue.name}`);
            console.log(`Date of the Event is ${moment(res.data[0].datetime).format('YYYY-MM-DD')}`)
        });
    }

    function spotifyIt(search) {
        spotify.search({
            type: 'track',
            query: search, //array literal version of query:query
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // console.log(data.tracks.items[0]);

            console.log(`the artist is ${data.tracks.items[0].artists[0].name}`);
            console.log(`the song's name is ${data.tracks.items[0].name}`);
            console.log(`the preview link of the song is ${data.tracks.items[0].preview_url}`);
            console.log(`the album is from ${data.tracks.items[0].album.name}`);
        });

    }

    function movieIt(query) {
        //json search for the root of the movie from OMDb
        // `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
        const url = 'http://www.omdbapi.com/' +
            `?apikey=trilogy` +
            `&t=${query}`

        axios.get(url).then(res => {
            // console.log (`${(res.data)
            console.log(`Title of the movie is ${res.data.Title}`);
            console.log(`Year the movie came out ${res.data.Year}`);
            console.log(`IMDB Rating is ${res.data.imdbRating}`);
            console.log(`Country where the movie was produced is ${res.data.Country}`);
            console.log(`Language is ${res.data.Language}`);
            console.log(`Plot of the movie is ${res.data.Plot}`);
            console.log(`Actors are ${res.data.Actors}`);
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
            getUserInput(com, com1)
            console.log(com);
            console.log(com1);


        });
    }
};