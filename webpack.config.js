const webpack = import('webpack')
module.exports = {
    entry: {
      main:'./public/JS/indexJs/app.js',
      controlPanel:'./public/JS/controlPanelJs/app.js'
    },
    mode: "development",
    watch: true,
    output: {
        path:__dirname+'\\public\\JS',
        filename: './[name].bundle.js',
        libraryTarget:'umd',
        library:'axios'
    }
  
};