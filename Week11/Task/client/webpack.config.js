const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isProd = !!env.production;
    const mode = isProd ? 'production' : 'development'
    return {
        mode,
        entry: path.resolve(__dirname, 'src', 'app.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.bundle.js'
        },
        devtool: isProd ? undefined : 'source-map',
        module: {
            rules: [
                {
                    test: /\.txt/,
                    use: [
                        {
                            loader: 'raw-loader',
                            options: {esModule: false}
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /node-modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'My first webpack app',
                filename: './index.html'
            })
        ],
        devServer: {
            static:{
                directory: path.join(__dirname, 'dist'), 
            },
            compress: true,
            port: 9000 
        }
    }
}