const {resolve} = require("path");

module.exports = {
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            // css-loader负责把css编译成所谓的common.js? style-loader是在js中插入一个<style></style>，里面放的是css-loader的结果
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            
            // 1. 不同的loader相互独立
            // 2. less先转为css文件， css文件在使用css-loader, style-loader, 顺序从右到左
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 
                // 需要同时下载less, less-loader, 但是此处只能引入less-loader, 不能引入less哦
                'less-loader']
            }
        ]
    },

    plugins: [

    ]

}