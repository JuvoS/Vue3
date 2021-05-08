const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const production = process.env.NODE_ENV === "production";
module.exports = {
  
  chainWebpack: config => {
    if (production) {
      config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
      //生产环境才开启 不然开发时lodash函数不起作用 也不报错
    }
  },
};