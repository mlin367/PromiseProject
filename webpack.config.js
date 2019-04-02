const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
