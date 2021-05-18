# Idealab
## アイデア発想アプリ  
オンライン上リアルタイムに多くの人達とアイデアを深めていくための掲示板  
アイデア発想、ビジネス創出、分析、ペルソナ作成などなど自分一人では広げられない様々なアイデアを多くの人と共に出していく  
リアルタイム更新のため授業や会議で活用などユースケースは無限大  
テンプレートもあるので膨らませたいアイデアにあったものを活用  
個人開発練習用アプリとして始めますが本格的に作成公開予定

# 環境構築
## 初期設定
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

## Database設定
### Install
Databse設定用モジュール
```
$ npm i -S mysql
$ npm i -S mysql2
$ npm i -S sequelize
sequelize-cli is installed to global to use sequelize command under server directory
$ npm i -S sequelize-cli -g
```
### Database作成
以下のコマンドをserverフォルダ下で初回実行
```
sequelize init
```
config\config.jsonを編集
```
"username": "root",
"password": "password",
"database": "databse name",
"host": "host name or IP address",
"dialect": "mysql"
```
テーブル作成
```
cd {checkout folder}\src\server\database
sequelize model:create --name table_name --underscored --attributes attr_name:string,attr_name2:date
sequelize db:migrate --env development
```
models下のモデルを編集  
初期データベース構築方法  
```
cd {checkout folder}\src\server\database
Seedの作成  
sequelize seed:create --name seed_name
必要なデータを01_initial_seedの設定してあるので初回データベース構築時に実行する  
sequelize db:seed:all
再度DBでSeedを構築しなおす場合
sequelize db:seed:undo:all
```

参考：  
Sequelizeでデータベース作成  
https://qiita.com/cobot00/items/0bc0da1095e09bcd0d5f  
Sequelizeでデータベース更新  
https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527  
データ型  
https://sequelize.org/v5/manual/data-types.html  
依存関係定義  
https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-addConstraint  

MySQLでユーザー認証方法の設定が必要
MySQLでデフォルトとなっている認証方法がNodeのModuleで未実装のためMySQL側で旧認証方法へ変更が必要  
参考：https://qiita.com/monga3/items/6583c07a9b275b469608
```
ALTER USER 'username'@'hostname' IDENTIFIED WITH mysql_native_password BY 'password'
```

# システムダイアグラム
![システムダイアグラム](/file/system_diagram.PNG)

# システム設定
TBD


