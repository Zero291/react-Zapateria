const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-Zapateria/bundle.js',
        publicPath: '/react-Zapateria/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/Icons'),
            '@logos': path.resolve(__dirname, 'src/assets/Logos'),
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: 'html-loader'
            }
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            ],
        },
        {
            test: /\.(png|jpg|svg|jpeg|webp)$/,
        /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
            type: 'asset'
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
        }),
        new MiniCssExtractPlugin({
        filename: '[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:3005,
    }
}
