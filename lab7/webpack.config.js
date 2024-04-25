const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['/main.js', './styles.less'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.styl$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
};
