"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = /** @type {import("webpack").Configuration} */ ({
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",

  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],

  resolve: {
    alias: {
    }
  },

  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: `harumi.min.js`,
    library: "Harumi",
    libraryTarget: "umd",
    globalObject: "this",
  },

  devServer: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: "all",
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: "./public",
      watch: true,
    },
    client: {
      overlay: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },

  target: ["web", "es5"],
});