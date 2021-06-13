const {
    override,
    // ...
    addWebpackAlias
} = require('customize-cra')
const { resolve } = require('path')

// 打包配置
const addCustomize = () => config => {
    // 配置打包后的文件位置
    config.output.path = __dirname + '/dist';
    config.output.publicPath = '/'; 
    return config;
}

module.exports = override(
    // 路径别名
    addWebpackAlias({
        '@': resolve(__dirname, 'src')
    }),
    addCustomize(),
)