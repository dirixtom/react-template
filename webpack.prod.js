const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = [{
    entry: './src/public/index.tsx',                // Entry point
    mode: 'production',                            // Mode -> Development | Production
    target: 'web',                                  // Web platform
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        usedExports: true
    },
    performance: {                                  // Performance hints
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        static: path.join(__dirname, 'dist/public'),
        devMiddleware: {
            publicPath: '/',
        },
        port: 8080,
        liveReload: true,
        hot: true,
        watchFiles: [ path.join(__dirname, 'src/**/*') ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({                     // HtmlWebpackPlugin - Simplifies creation of HTML files to serve your webpack bundles
            template: './src/public/index.html'
        }),
        new CompressionPlugin({                     // CompressionPlugin - Prepare compressed versions of assets to serve them with Content-Encoding
            test: /\.(.ts|tsx|js|jsx|css|scss|sass|svg|png|jpg|webp|avif)$/,
            exclude: /node_modules/,
            filename: '[path][base].gz',
            algorithm: 'gzip',
            deleteOriginalAssets: false,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']  // Extensions to resolve
    },
    module: {                                       // Loaders
        rules: [
            {                                       // TypeScript loader
                test: /\.(.ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {                                       // Babel loader
                test: /\.(.js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react', '@babel/preset-typescript']
                    },
                },
            },
            {                                       // SCSS loader
                test: /\.(s(a|c)ss)$/,
                exclude: /node_modules/,
                use: [                              // Order matters
                    "style-loader",                 // Creates `style` nodes from JS strings
                    "css-loader",                   // Translates CSS into CommonJS
                    "sass-loader",                  // Compiles Sass to CSS
                ],
            },
        ]
    }
}]