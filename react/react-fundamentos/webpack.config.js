const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: indica o arquivo principal do aplicativo
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })],
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