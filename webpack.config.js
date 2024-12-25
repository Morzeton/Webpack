const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// './src/index.js'
module.exports = {
    mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'),
  })
],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    }
};
