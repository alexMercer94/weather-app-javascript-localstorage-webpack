const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Indicar que archivo js tiene que copiar y a donde
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Leer, cargar y comprimir css
                use: ['style-loader', 'css-loader'] // Se indica que modulos se van a utilizar
            }
        ]
    },
    plugins: [
        // Poder copiar un archivo HTML de un directorio a otro
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
