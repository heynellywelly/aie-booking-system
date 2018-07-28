// Packages
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('../webpack.config.js');
var routes = require('../routes/routes');

// Create the app
var app = express();
// Create a compiler
var compiler = webpack(config);
// Check what ports have been set for the current environment variable
// Else, use the default port of 8000 (for Dev) or 80 (for Production)
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View Engine using the Dev Middleware
// Check to ensure that we are specifically NOT in the production environment
if (process.env.NODE_ENV !== 'production') {
    // Middleware
    // Use the webpack-dev-middleware
    app.use(require('webpack-dev-middleware')(compiler,
        {
            publicPath: config.output.publicPath
        }
    ));
    // As well as the webpack-hot-middleware
    app.use(require('webpack-hot-middleware')(compiler));
}

// This line tells Express to use the /public directory when fulfilling requests
// for static assets, like our bundle.js (Whose output is in the /public directory,
// as directed in webpack.config.js)
app.use(express.static(path.resolve(__dirname, '../public/')));

// This line tells Express to use these routes
app.use('/', routes);

// Error handler for other requests
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

// Serve the app on a port
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at port: ' + port);
});
