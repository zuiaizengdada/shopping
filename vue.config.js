const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'filter': '@/filter'
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtoviewport({
                        // 视窗的宽度，对应设计稿的宽度
                        viewportWidth: 375,
                        // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                        viewportHeight: 667,
                        // 指定`px`转换为视窗单位值的小数位数
                        unitPrecision: 5,
                        // 指定需要转换成的视窗单位，建议使用vw
                        viewportUnit: 'vw',
                        // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                        selectorBlackList: ['.ignore'],
                        // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                        minPixelValue: 1,
                        // 允许在媒体查询中转换`px`
                        mediaQuery: false,
                        exclude: [/MainBar/]
                    })
                ]
            }
        }
    }
}