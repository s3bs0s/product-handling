const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  entry: './resources/index.js',
  output: {
    path: path.join(__dirname + '/public/js'),
    filename: 'bundle.js'
  },
  // Instrucciones del webpack para compilar código
  module: {
    rules: [
      {
        // Transpilador de estilos CSS en archivos VUE
        test: /\.css/,
        exclude: /node_module/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        // Transpilador de código moderno de JavaScript
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader'
      },
      {
        // Transpilador de archivos VUE
        test: /\.vue$/,
        exclude: /node_module/,
        loader: 'vue-loader'
      },
      {
        // Transpilador de archivos de estilo SASS
        test: /\.scss$/,
        exclude: /node_module/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}