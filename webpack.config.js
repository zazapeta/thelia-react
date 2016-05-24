module.exports = {
  entry: [
    './assets/src/js/reactApp.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/assets/dist/js',
    publicPath: '/',
    filename: 'reactApp.min.js'
  },
  devServer: {
    contentBase: './dist'
  }
};