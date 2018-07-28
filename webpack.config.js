var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 'entry' is the starting point for config.js to start mapping out the file dependencies
    entry: ['babel-polyfill', path.join(__dirname, '/src/index.js')],
    output: {
        // 'path' is the target directory where the bundled files will be output to (MUST be an ABSOLUTE path)
        path: path.join(__dirname, '/public'),
        // 'filename' is the filename of the intended output bundle
        filename: "bundle.js",
        // 'publicPath' is the URL to the output directory, relative to the html page
        // It specifies the public URL address of the output files when referenced in a browser
        // publicPath: path.resolve(__dirname, './public')
    },
    // Configuration for modules
    module: {
        rules: [
            // Rules for .js files
            {   
                // 'test' is a regex expression to test for all files that end with these extension(s)
                test: /\.js?$/,
                // 'include' is a path, whose files that we wish to include when checking for this rule
                include: [
                    path.resolve(__dirname, "src")
                ],
                // 'exclude' is a path, whose files that we wish to exclude (so that it's faster) reading from
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                // 'loader' is to indicate which loader to use when reading in these files
                // Webpack, by default, can only read Javascript files
                loader: "babel-loader",
                // 'options' for the loader
                options: {
                    presets: ["react", "env", "stage-3"]
                }
            },
            // Rules for .css files
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    // 'resolve' are the options for resolving module requests
    resolve: {
        // And 'extensions' are the file extensions to be used
        extensions: ['.js', '.css'],
    },
    // 'devtool' are tools that we wish to use during development
    // In this case, "inline-source-map" notifies us of the specific file 
    // (since all the files that we use will be bundled into 1 file, bundle.js)
    // that may be throwing an error
    devtool: "inline-source-map"
};