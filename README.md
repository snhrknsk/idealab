# Idealab
## アイデア発想アプリ  
掲示板でオンライン上リアルタイムに多くの人達とアイデアを深めていくための掲示板  
アイデア発想、ビジネス創出、分析、ペルソナ作成などなど自分一人では広げられない様々なアイデアを多くの人と共に出していく  
リアルタイム更新のため授業や会議で活用などユースケースは無限大  
テンプレートもあるので膨らませたいアイデアにあったものを活用  
個人開発練習用アプリとして始めますが本格的に作成公開予定

# 環境構築
参考：  
<https://qiita.com/ohs30359-nobuhara/items/bdc06b2db1bef7af2439>
環境構築コマンド
```
$ npm i -D webpack-cli webpack webpack-dev-server html-webpack-plugin
$ npm i -D babel-core babel-loader@7 babel-preset-env babel-preset-react  
$ npm i -D css-loader style-loader
$ npm i -S react react-dom

$ npm i -S express
$ npm i -D babel-preset-es2015 babel-preset-stage-0 babel-cli
$ npm i -D nodemon concurrently
```

config\webpack.config.js
```
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
```

```
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});
```

```
 module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}; 
```

.babelrc
```
{
  "presets": ["env", "react", "es2015", "stage-0"]
}
```

package.json
```
"scripts": {
  "server": "nodemon src/server/server.js  --exec babel-node",
  "client": "webpack serve --config ./config/webpack.config.dev.js --mode development",
  "build": "webpack --config ./config/webpack.config.js --mode production",
  "dev": "concurrently \"npm run client\" \"npm run server\"",
  "start": "NODE_ENV=production npm run build && npm run server"
},
```

* Clientデバッグ実行コマンド
  npm run client
  http://localhost:8080
* Serverデバッグ実行コマンド
  npm run server
  http://localhost:3000
* Server, Client同時実行コマンド
  npm run dev

# システムダイアグラム
TBD
