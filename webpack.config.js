module.exports = {
    // ...outras opções
    plugins: [
      // liga em curto-circuito todo código de aviso Vue.js
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"https://bodegalojadevinhos.com.br/menu"'
        }
      }),
      // minifica com eliminação de código morto
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      // webpack 1 apenas - otimiza ids de módulo por contagem de ocorrências
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  }