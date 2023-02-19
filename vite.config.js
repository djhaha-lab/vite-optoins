import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import windicss from "vite-plugin-windicss";
import path from "path";
// import createVitePlugins from "./vite/plugins"; // https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [windicss(), vue()],
});
// export default defineConfig(({ command, mode }) => {
//   // const env = loadEnv(mode, process.cwd());
//   //console.log(env);   //变量在命令行里打印出来
//   //.env文件中的环境变量必须以VITE_为前缀，否则无法引用成功
//   // const { VITE_APP_ENV } = env;
//   return {
//     //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/base: VITE_APP_ENV==='字段名' ? '/' : '/', // 例子:env.VITE_APP_BASE_URL || '/'
//     plugins: [windicss(), vue()],
//     resolve: {
//       alias: {
//         //别名配置
//         // "~": path.resolve(__dirname, "./"),
//         //配置的别名
//         "@": path.resolve(__dirname, "./src"),
//       },
//       //导入时想要省略的扩展名 https://cn.vitejs.dev/config/shared-options.html#resolve-extensions
//       // extensions: [
//       //   ".mjs",
//       //   ".js",
//       //   ".mts",
//       //   ".ts",
//       //   ".jsx",
//       //   ".tsx",
//       //   ".json",
//       //   ".vue",
//       // ],
//     },
//     //本地运行配置，以及反向代理配置
//     server: {
//       port: "9000", //端口
//       // host: "localhost",
//       //ip地址例如192.168.1.177
//       host: true,
//       open: true,
//       //服务启动时自动在浏览器中打开应用
//       // 反向代理配置
//       proxy: {
//         //配置多个代理
//         "/dev-api": {
//           target: "https://xxxx.com/",
//           //例子:http://192.168.1.177:8080 或测试服务器https://xxxx.com
//           changeOrigin: true, ///设置访问目标地址允许跨域
//           // rewrite: (p) => p.replace(/^\/dev-api/, ""),
//         },
//         "/prod-api": {
//           target: "https://xxxx.com/",
//           changeOrigin: true,
//           ///设置访问目标地址允许跨域
//           // rewrite: (p) => p.replace(/^\/prod-api/, ""),
//         },
//       },
//     },
//     // css: {
//     //   // postCss 共享配置
//     //   postcss: {
//     //     plugins: [
//     //       //扩展插件
//     //       {
//     //         postcssPlugin: "internal:charset-removal",
//     //         AtRule: {
//     //           //大写AtRule
//     //           charset: (atRule) => {
//     //             //char set字符集
//     //             if (atRule.name === "charset") {
//     //               atRule.remove(); //删除
//     //             }
//     //           },
//     //         },
//     //       },
//     //     ],
//     //   },
//     // },
//   };
// });
