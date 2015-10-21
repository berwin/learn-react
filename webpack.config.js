module.exports = {
    entry: './src/app/app.jsx',
    output: {
        path: __dirname + '/src/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /(\.js|\.jsx)$/, loader: 'babel-loader'}
        ]
    },

    resolve: {
        root: [__dirname + '/node_modules']
    }
};