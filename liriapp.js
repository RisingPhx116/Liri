//use dotenv to be able to run app on any environmeny
require("dotenv").config()
//variable setups for accessibility start below

//variable for access to my filesystem
var fs = require("fs");
//variable for axios access & HTTP requests
var axios = require("axios");
// believe I need to make a keys.js for my api key info - need to come back to that


//variables for my process.argvs, slice is for multiple word response
var searchType = process.argv[2];
var searchName = process.argv.slice(3).join(" ");

//using SWITCH to be more efficient than nested IFs
switch (searchType) {
    case "concert-this":
    concertThis(searchName);
    break;

    case "movie-this":
    movieThis(searchName);
    break;

    case "spotify-this":
    spotifyThisSong(searchName);
    break;

    case "do-this":
    doThis(searchName);
    break;

    default:
    console.log("Choose concert, movie, spotify, something...")    
}
