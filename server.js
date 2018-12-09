var express = require('express');

const app = express();
const PORT = process.env.PORT || 80;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes.
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Set up default catch all route for unknown urls. 
app.get('*', function(req, res){
    res.redirect('/');
})

// Set up server to listen on the specified port.
app.listen(PORT, function(){
    console.log(`Server listening on port: ${PORT}`);
})