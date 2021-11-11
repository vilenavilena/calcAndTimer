const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');



module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.mp3$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				},
			},
		],
	},
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        //new BundleAnalyzerPlugin
    ]
}