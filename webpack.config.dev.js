import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, //display the list of all files its bundling . Set this noise off in prod build
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, // loaders teach webpack on how to handle different file types
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
