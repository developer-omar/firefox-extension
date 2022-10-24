const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const extensionName = "example-extension";

const generalConfig = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
};

module.exports = [
  {
    ...generalConfig,
    entry: {
      popup: path.resolve(__dirname, `src/popup/popup.tsx`),
      options: path.resolve(__dirname, `src/options/options.tsx`),
      content: path.resolve(__dirname, `src/content/content.js`),
      background: path.resolve(__dirname, `src/background/background.js`),
    },
    output: {
      path: path.resolve(__dirname, `${extensionName}`),
      filename: '[name]/[name].js',
      clean: true,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, `./${extensionName}`)
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `src/assets`,
            to: path.resolve(__dirname, `${extensionName}/assets`)
          },
          {
            from: `src/_locales`,
            to: path.resolve(__dirname, `${extensionName}/_locales`)
          },
          {
            from: `src/manifest.json`,
            to: path.resolve(__dirname, `${extensionName}/manifest.json`)
          },
        ]
      }),
      new HtmlWebpackPlugin({
        title: 'Popup',
        filename: path.resolve(__dirname, `${extensionName}/popup/index.html`),
        template: `src/popup/index.html`,
        chunks: ['popup'],
      }),
      new HtmlWebpackPlugin({
        title: 'Options',
        filename: path.resolve(__dirname, `${extensionName}/options/index.html`),
        template: `src/options/index.html`,
        chunks: ['options'],
      }),
    ],
  }
];