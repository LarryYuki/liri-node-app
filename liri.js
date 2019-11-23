// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
const fs = require('fs');
const axios = require('axios');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: '58a3bd2921e945bfb6032a2074c0eda8',
    secret: 'ddb3373eae96448cbe0fd7c6fdde9dbc'
});


// let command= process.argv[2]
// let query= process.agrv[3]
// let a = "momma said \"I can't\""
// let b = 'momma said "I can\'t"'
// let c = `momma said "I can't"`

// let faves = ["deerhoof", "the slip", "taylor swift"]

// faves.forEach(band => console.log(`${band} is my favorite.
// they have ${band.length} letters in their name`))// ${} expands variables inside a template literal

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
    console.log("conerting")

}

function spotifyIt() {
    console.log("music")
    spotify.search({
        type: 'track',
        query, //array literal version of query:query,
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let sdata = data.artists[0].name;
        console.log(sdata)
        console.log(data.tracks.items[0]);

        console.log(`the artist is ${data.tracks.items[0].artists[0].name}`);
        //console.log(data.tracks.items[0]);
        //console.log(JSON.stringify(data.tracks.items[0], null, 10));
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


    // console.log("watching")

}

function doIt() {
    fs.readFile('random.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString().split("\n"));
        console.log("doing")
        // use fs to read the file
        // it will return a string, which we will .split(",")
        // call getUserInput()
    });
}

    // let car = {
    //     make: "honda",
    //     model: "civic"
    // }

    // let {
    //     make,
    //     model
    // } = car
    // console.log(`I drive a ${make} ${model}`)//object destructuring





    // const movieTitle = () => {
    //     const arguments = process.argv;
    //     let argArr = [];
    //     for (let i = 2; i < arguments.length; i++) {
    //         argArr.push(arguments[i]);
    //     }
    //     return argArr.join("+");
    // };
    // module.exports = movieTitle;