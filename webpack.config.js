const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode : 'production',
    entry : {
        app: './src/index.js'
    },
    module:{
        rules:[
            {test: /\.(js|jsx)$/, use:['babel-loader']},
            {test: /\.(css)$/, use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title:'Invoice generator',
            template:'./src/template.ejs',
            filename:'invoice.html',
            chunks:['app']
        })
    ],
    output:{
        filename:'[app].bundle.js',
        path: path.resolve(__dirname,'build'),
        publicPath: '/'
    },
    devtool: 'inline-source-map'
}