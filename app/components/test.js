// function declaration
function add (x, y) {
	return x + y;
}

//function expression
//arrow function below is same thing

var add = function (x, y) {
	return x + y;
}

var add = (x, y) => {
}


//arrow function below is same thing
users.map(function (user) {
})

users.map((user) => {
})


function getTweets (uid) {
	return fetch('https://api.users.com/' + uid)
		.then((response) => response.json())
		.then((response) => response.data)
		.then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
		.then((tweets) => tweets.filter((tweets) => tweets.rts > 50))
}