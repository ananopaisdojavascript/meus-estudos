const path = require('path');

module.exports = {
    // entry: indica o arquivo principal do aplicativo
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // module: indica o comportamento do aplicativo ao importar tipos diferentes de arquivos
    module: {
        rules: [
            {
                // Recebe uma expressão regular para verificar arquivos .js
                test: /\.jsx$/,
                exclude: /node_modules/,
                // Integra o Babel ao Webpack
                use: 'babel-loader'
            }
        ],
    }
}