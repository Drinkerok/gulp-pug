const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'source'),
  mode: process.env.NODE_ENV, // Режим сборки
  // mode: 'production', // для дев режима для IE
  entry: {
    main: './js/main.js',
  }, // Точка входа приложения
  output: {// Настройка выходного файла
    filename: '[name].js',
    path: path.join(__dirname, 'build/js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
