const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname,dir)
} 
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:(config)=>{
    config.resolve.alias
    .set("@",resolve("./src"))
    .set("~",resolve("./"))
  }
})
