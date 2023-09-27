// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js", // The entry point of your application
  output: {
    filename: "bundle.js", // The name of the output bundle
    path: path.resolve(__dirname, "dist"), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use Babel for JavaScript transpilation
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
};
