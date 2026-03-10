const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ThemeWatcher = require("@salla.sa/twilight/watcher.js");

const asset = (file) => path.resolve("src/assets", file || "");
const pub = (file) => path.resolve("public", file || "");

module.exports = {
  entry: {
    app: [asset("styles/englisheazy.css"), asset("js/theme.js")]
  },
  output: {
    path: pub(),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: asset("images"), to: pub("images") }]
    })
  ],
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()]
  }
};
