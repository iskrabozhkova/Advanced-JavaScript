const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isProd = !!env.production;
    const mode = isProd ? 'production' : 'development'
    return {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        devtool: isProd ? undefined : 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options:{
                        configFile: path.resolve(__dirname, 'tsconfig.json')
                    }
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
              inject: 'body',
              title: 'My First Webpack App',
              template: './index.html',
            })
          ],
          devServer: {
            static: {
              directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000
          }
    }
}