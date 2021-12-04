const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  // Instrucciones del webpack para compilar código
  module: {
    rules: [
      {
        // Transpilador de código moderno de JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Transpilador del framework Vue.js a código
        // JavaScript que el navegador pueda leer
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}