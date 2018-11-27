const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules/')
                ],
                loader: "babel-loader"
            }
        ]
    }
}