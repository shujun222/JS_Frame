/**
 * eslint js语法检查：规则校验，语法检查
 * author: shujun
 * date: 2021-1-23
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the 5 most important elements:
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    },

    mode: 'development',

    module: {
        rules: [
            /*
             语法检查：eslint
             1. 安装插件 eslint-loader eslint
             2. 添加modules, 要排除node_modules
             3. 检查规则用什么呢？在package.json中设置eslintConfig, 
                "eslintConfig": {
                    "extends": "airbnb-base"
                }
                此处推荐airbnb, 这个规则要生效，需要安装：eslint-config-airbnb-base eslint-plugin-import
                所有整体安装命令: npm i eslint-loader eslint  eslint-config-airbnb-base eslint-plugin-import -D  
             4. 如果需要自动修复，则：fix: true
             5. 取消默认告警，则添加下一行不进行检查：eslint-disable-next-line
                airbnb-base npm官网：https://www.npmjs.com/package/eslint-config-airbnb
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    "fix": true    
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

 }