var path = require('path'); // Path comes stock with node, It allows us to get the current path directory, as well as other things

module.exports = { // exporting this {object}

    entry: path.resolve(__dirname, 'src') + '/app/index.js', // Our Webpack entry point: Webpack is going to find all js, combine, and export.
    output: { // Using the path. module we required, then get current directory __dirname, then add 'src' folder, then tack on /app/index.js (!create)
        path: path.resolve(__dirname, 'dist') + '/app', // take current dir, look in dist, then /app (WP will create this folder structer for us)
        filename: 'bundle.js', // This is where all of our js will end up
        publicPath: '/app/' // publicPath is saying we want to reference the /app/index.js folder as /app/
    },
    module: {
        loaders: [ // config for babel, our 'loaders', here we have 2 objects
            {
                test: /\.js$/, // Telling which files we want to work on: looking for any file with .js extension,  and convert them to vanilla js
                include: path.resolve(__dirname, 'src'), // include any js in src folder
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] // change both react and es2015 into vanilla js
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' // pipe these loaders together
            }
        ]
    }
};
// Next if! add "start": "npm run build",
              //"build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234"
              // to package.json