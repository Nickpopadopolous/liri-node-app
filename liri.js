var keys = require("./keys.js");
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('spotify');
var request  = require("request");
var inputOne = process.argv[2];
var inputTwo = process.argv[3];


function switchOne() {
	switch(inputOne) {
		case "movie-this":
		if(inputTwo == undefined){
			inputTwo == 'Mr.Nobody';
		}
		movieFunction();
		break;
	}
}

function movieFunction()  {
var queryUrl = "http://www.omdbapi.com/?t=" + inputTwo + "&y=&plot=short&tomatoes=true&r=json";
request(queryUrl, function(error, response, body) {
if (error) return console.log(error);

		body = JSON.parse(body)
		console.log("Title: " + body.Title);
		console.log("Release Year: " + body.Year);
		console.log("Country: " + body.Country);
		console.log("Language: " + body.Language);
		console.log("Plot: " + body.Plot);
		console.log("Actors: " + body.Actors);
		console.log("IMDB Rating " + body.imdbRating);
		console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
		console.log("Rotten Tomatoes URL: " + body.tomatoURL);
		
	});
}