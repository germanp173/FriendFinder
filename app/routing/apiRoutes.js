var friends = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    })

    app.post('/api/friends', function(req, res){

        var bestMatchIndex = -1;
        var score = friends.reduce((bestScore, friend, index) => {

            // Calculate the compatibility score between the current friend (in the iteration) and the new friend.
            var compatibilityScore = friend.scores.reduce((total, val, index) => {
                return total + Math.abs(val - req.body.scores[index]);
            }, 0);

            // If we're on the first friend or the compatibility score is the lowest we've seen 
            // then set the friend index and return that score.
            if (index === 0 || compatibilityScore < bestScore){
                bestMatchIndex = index;
                return compatibilityScore;
            } else {
                return bestScore;
            }
        }, 0);

        // Add new user to friends data.
        friends.push(req.body);

        // Return best match along with the score.
        res.json({
            name: friends[bestMatchIndex].name,
            photo: friends[bestMatchIndex].photo,
            score: score
        });
    })
}