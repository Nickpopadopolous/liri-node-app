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
		movieFunction();
		break;
		case 'my-tweets':
		twitterFunction();
		break;
	}


function movieFunction()  {
var queryUrl = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&tomatoes=true&r=json";
request(queryUrl, function(error, response, body) {

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

function twitterFunction(){
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
}