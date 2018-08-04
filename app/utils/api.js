var axios = require('axios');

var id = "ee629e3fe4b916ee4046";
var sec = "1ca5e5ec44329756dcc08a4f07ccaaf24b8fa191";
var params = "?client_id=" + id + "&client_secret=" + sec;


function getProfile (username) {
	return axios.get('https://api.github.com/users/' + username + params)
		.then(function(user) {
			return user.data;
	});
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

function getStarCount (repos) {
	return repos.data.reduce(function (count, repo){
		return count + repo.stargazers_count
	}, 0);
}

// ^^^^ take repos.data and reduce it all to single number
// Start COUNT at 0; repo is first item in list
// we then return the COUNT + number of starts (repo.stargazers_count)
// restarts with updated count; iterates all the way through




function caclulateScore(profile, repos) {
	var followers = profile.followers;
	var totalStars = getStarCount(repos);

	return (followers * 3) + totalStars;
}



function handleError (error) {
	console.warn(error);
	return null;
}



function getUserData(player) {
	return axios.all([
		getProfile(player),
		getRepos(player)
	])
	.then(function (data) {
		var profile = data[0];
		var repos = data[1];

	return {
		profile: profile,
		score: caclulateScore(profile, repos)
		}
	})
}

//^^^^^^^ takes in array of promises; once all have been resolved
// it calls the THEN function
//Once getProfile and getRepos are called we move to the THEN function
//THEN function passes me an array with Profile & Repository
//Get user data retrieves a player
//Asynchronously call getProfile and getRepos
//We get their profiles and repos; then return an object with this info




function sortPlayers (players) {
	return players.sort(function (a,b){
		return b.score - a.score;
	});
}

/// ^^^idea is we sort player by score; player in first index[0] is winner
////returns us brand new array; winner is index[0]



module.exports = {
	battle: function (players) {
		return axios.all(players.map(getUserData))
			.then(sortPlayers)
			.catch(handleError)
	},

///^^^^^^^Axios promises; Battle function runs (arg being players)
/// We map over the players; for each iteration we call getUserData
// This calls getProfile and getRepos & returns profile & score formatted
//If promise is resolved, we sort players [0] is winner && CATCH error handling

	fetchPopularRepos: function (language) {
	  var encodedURI = window.encodeURI
	  ('https://api.github.com/search/repositories?q=stars:>1+language:'
	  	+ language + '&sort=stars&order=desc&type=Repositories');

	  return axios.get(encodedURI)
	    .then(function (response) {
	      return response.data.items;
	    });
		}
	};