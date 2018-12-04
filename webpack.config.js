const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin

module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',  // production
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [

            //  共用
            {
               test: /\.js$/,
               use: ['babel-loader'],
               exclude: /(node_modules)/
            },
            {
                test: /\.css/,
                use: [
                    //  MiniCssExtractPlugin.loader,
                    //process.env.NODE_ENV === 'production'?MiniCssExtractPlugin.loader:'style-loader',
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [

    //     // 打包时用
        new CleanWebpackPlugin(['dist']),
    //     new MiniCssExtractPlugin({
    //         filename: 'css/[name].css',
    //         chunkFilename: '[id].css'
    //     }),
    //     new HtmlWebpackPlugin({
    //         //使用自带模板时，设置为false,使用自己的html模板是设置为true
    //        inject: true, 
    //        template: './index.html', //使用自己的模板时一下配置不起作用
    //    }),

       // 开发时用
       new HotModuleReplacementPlugin()

    ],
    // watchOptions: {
    //     // 不监听的文件或文件夹，支持正则匹配
    //     // 默认为空
    //     ignored: /node_modules/,
    //     // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    //     // 默认为 300ms
    //     aggregateTimeout: 300,
    //     // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    //     // 默认每秒问 1000 次
    //     poll: 1000
    // },
    devServer:{  // 开发环境下
        host: 'localhost',
        port: 9000,
        // hot: true,
        compress: true,
        open: true, 
        // useLocalIp:true,
    }
};