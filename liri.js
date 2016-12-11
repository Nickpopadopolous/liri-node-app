var keys = require('./keys.js');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('spotify');
var request  = require("request");
var inputOne = process.argv[2];
var inputTwo = process.argv[3];



switch(process.argv[2]) {
	case 'movie-this':
	if(inputTwo == undefined){
		inputTwo == 'Mr.Nobody';
	}
	var queryUrl = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&tomatoes=true&r=json";
	request(queryUrl, function(error, data, body) {

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
	break;
	case 'my-tweets':
	var client = new Twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret:  keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

	var parameters = {screen_name: 'npearce1441'};

	client.get('statuses/user_timeline', parameters, function(error, tweets, response){
		if (!error && response.statusCode == 200) {
			for(var i = 0; i < 3; i++){
				console.log(tweets[i].text + "Created on:" + tweets[i].created_at);
			}
		} else {
			console.log(error);
		}

	});
	break;
	case 'spotify-this-song':
	if (process.argv[3]=== undefined) {
		var song = "The Sign";
	}

	Spotify.search({type: 'track', query: process.argv[3]}, function(err, data) {
		if (err) {
			console.log('Unexpected Error' + err);
		}
		var songs = data.tracks.items;
		for(var i = 0; i < songs.length; i++) {
			console.log("Album:" + songs[0].album.name);
			console.log("Artist:" + songs[0].artists.name);
			console.log("Preview Link:" + songs[0].preview_url);
			console.log("Song:" + songs[0].name);
		}
	});
	break;
}




