var {app} = require('./app.js');
// var port = 3000

var port = process.env.PORT || 3000; // Look for port number in environment, otherwise, default at 3000

var server = app.listen(port, function() {
    console.log("App hosted at localhost:"+port)
})

