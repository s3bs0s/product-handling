const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  // Instrucciones del webpack para compilar código
  module: {
    rules: [
      {
        // Transpilador de código moderno de JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // Transpilador del framework Vue.js a código
        // JavaScript que el navegador pueda leer
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // Transpilador de estilos SASS a CSS
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // Crea los CSS de los textos en JavaScript
          "css-loader", // Traducce CSS dentró de JavaScript
          "sass-loader" // Transpila estilos SASS a CSS 
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}