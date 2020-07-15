const path = require("path");
const Htmlplugin = require("html-webpack-plugin")

module.exports ={
    entry: "./src/index.js",
    output: {
        // path: path.resolve(__dirname, "build"),
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    },
    module: {
      rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/transform-runtime"
              ]
            }
          },
          
          {
            test: /\.(css|scss)$/,
            use: [ 
              'style-loader',
              {
                loader: "css-loader"
              }
            ],
          },
          {
            test: /\.(png|svg|jpg|gif|webp|woff(2)?|ttf|eot|svg)$/,
            use: ['file-loader']
          }
          
        ]  
    },
    plugins: [
      new Htmlplugin({template: "./src/index.html"})
    ]
}