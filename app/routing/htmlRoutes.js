var path = require('path');

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    })

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    })
    
    app.get('/background', function(req, res){
        res.sendFile(path.join(__dirname, '../images/background.jpg'));
    })

    app.get('/icon', function(req, res){
        res.sendFile(path.join(__dirname, '../images/icon.png'));
    })
}