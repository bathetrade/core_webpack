const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/appMain.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'js/ballz.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[contenthash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};