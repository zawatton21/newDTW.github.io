module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    target: 'electron-renderer', // または 'electron-main' 'node' など

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `${__dirname}/src/renderer/main_d.ts`,

    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public/bundle/`,
      // 出力ファイル名
      filename: "main.js"
    },
    
    module: {
        rules: [
          {
            // 拡張子 .ts の場合
            test: /\.ts$/,
            // TypeScript をコンパイルする
            use: 'ts-loader',
          },
          {
            // 拡張子 .js の場合
            test: /\.js$/,
            use: 'babel-loader',
          },
        ],
      },
      // import 文で .ts ファイルを解決するため
      // これを定義しないと import 文で拡張子を書く必要が生まれる。
      // フロントエンドの開発では拡張子を省略することが多いので、
      // 記載したほうがトラブルに巻き込まれにくい。
      resolve: {
        // 拡張子を配列で指定
        extensions: [
          '.ts', '.js',
        ],
      },
  };