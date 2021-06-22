const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    devServer: {
        host: 'localhost',
        open: true
    }

}