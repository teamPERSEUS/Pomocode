const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(mode);
  return {
    mode,
    output: {
      filename: 'bundle.js',
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json',
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
