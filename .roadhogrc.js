const path = require('path');
const pxtorem = require('postcss-pxtorem');
const theme = require("./src/theme/theme.js");

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets/svgs'),  // 业务代码本地私有 svg 存放目录
];

function createTheme(){
  var result = {
    '@hd':"1px"
  };
  const themeStyles = theme.themeStyle||{};
  if(theme.brandPrimary){
    result["@brand-primary"] = theme.brandPrimary;
  }
  if(theme.brandPrimaryTap){
    result["@brand-primary-tap"] = theme.brandPrimaryTap;
  }
  for(const key in themeStyles){
    let val =  themeStyles[key];
    val = !isNaN(val)?val+"px":val;
    const newKey = "@"+key.split("_").join("-");
    result[newKey] = val;
  }
  return result;
}

export default {
  entry: 'src/index.js',
  theme: createTheme(theme),
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
  ],
  env: {
    development: { // 开发环境
      extraBabelPlugins: [
        'dva-hmr',
      ],
      define: {
        SERVER: '',
      }
    },
    uat: {// UAT环境
      define: {
        SERVER: 'uat server', 
      }
    },
    production: {// 生产环境
      define: {
        SERVER: 'prod server', 
      }
    }
  },
  define: {
    VERSION: require('./package.json').version
  },
  hash: true,
  ignoreMomentLocale: true,
}
