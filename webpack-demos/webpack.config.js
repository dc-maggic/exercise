const path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env = {}, argv) {
    const plugins = [];
    const isProduction = env['production'];
    if (isProduction) {
        plugins.push(
            new UglifyJsPlugin()
        )
    }
    return {
        // JavaScript 执行入口文件
        entry: './main',
        output: {
            // 把所有依赖的模块合并输出到一个 bundle.js 文件
            filename: 'bundle.js',
            // 输出文件都放到 dist 目录下
            path: path.resolve(__dirname, './dist'),
        },
        resolve: {
            extensions: ['.ts', '.js']   //用于配置在尝试过程中用到的后缀列表
        },
        module: {
            rules: [
                {
                    // 用正则去匹配要用该 loader 转换的 CSS 文件
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader?minimize'],
                },
                {
                    // 增加对 SCSS 文件的支持
                    test: /\.scss$/,
                    // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
                    use: ['style-loader', 'css-loader?minimize', 'sass-loader'],
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },

        devServer: { // DevServer 相关的配置
            https: false, // 是否开启 HTTPS 模式
        },

        profile: true, // 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳

        cache: false, // 是否启用缓存提升构建速度

        watch: true, // 是否开始
        watchOptions: { // 监听模式选项
            // 不监听的文件或文件夹，支持正则匹配。默认为空
            ignored: /node_modules/,
            // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
            // 默认为300ms 
            aggregateTimeout: 300,
            // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每隔1000毫秒询问一次
            poll: 1000
        },
        plugins: plugins,
        devtool: isProduction ? undefined : 'source-map'
    };
}