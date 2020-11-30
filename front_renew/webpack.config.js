const webpack = require('webpack');

const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');


module.exports = {
devtool: 'source-map',
  mode: 'development',
  entry: {
    app: ['./js/index.js','./js/stepone.js'],
  },
  output: {
    path: '/dist',
    filename: '[name.js]',
    path: buildPath
  },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            options: {
                presets: ['env']
            }
        },
      {
        test: /\.(scss|css|sass)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                // translates CSS into CommonJS
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                // compiles Sass to CSS
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true,
                    sourceMapContents: true
                }
            },
        ]
    },
    {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 8192
                }
            }
        ]
    }
    ,
    {
        // Load all icons
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    }
    ],
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        // Inject the js bundle at the end of the body of the given template
        inject: 'body',
    }),
    new FaviconsWebpackPlugin({
        // Your source logo
        logo: './images/imyourbox.ico',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'icons-[hash]/',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#fff',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'imyourbox_official',

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
        }
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            map: {
                inline: false,
            },
            discardComments: {
                removeAll: true
            },
            discardUnused: false
        },
        canPrint: true
    }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin처럼 할 수도 있습니다.
        }),
        new webpack.EnvironmentPlugin({ 'NODE_ENV': 'production' }), // 요즘은 DefinePlugin보다 이렇게 하는 추세입니다.
  ],
  optimization: {
    minimize: true,
    splitChunks: {},
    concatenateModules: true,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};