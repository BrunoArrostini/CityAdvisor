const HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require("path");
const FaviconsWebapckPlugins = require ("favicons-webpack-plugin");

module.exports = {
    
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "[name][ext]",
    }, 
    plugins:[new HtmlWebpackPlugin({
      template:"./src/template.html"
    })],
    plugins:[new FaviconsWebapckPlugins("./src/assets/img/globus.svg")],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
            type: "asset/resource",
          }
        ],
      },
};