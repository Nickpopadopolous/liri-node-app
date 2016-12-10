var keys = require("./keys.js");

var fs = require('fs');

var action = process.argv[2];

var request  = require("request");

var queryUrl = "http://www.omdbapi.com/?t=" + action + "&y=&plot=short&r=json";
request(queryUrl, function(error, response, body) {
if (error) return console.log(error);

	switch (action) {
		
		case 'movie-this':
		body = JSON.parse(body)
		console.log("Release Year: " + body.Year);

			break;
		}
	});