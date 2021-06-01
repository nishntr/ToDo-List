const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: path.resolve(__dirname, 'app/frontend/src/index.js'),
 output: {
   path: path.join(__dirname, 'app/frontend/static/frontend'),
   filename: 'main.js'
 },
  
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }
    ]
 },
 resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
//  plugins: [new HtmlWebpackPlugin({ template: 'app/frontend/templates/frontend/index.html' })],
}