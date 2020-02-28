module.exports = {  // メインとなるJavaScriptファイル（エントリーポイント）

    mode: "development",
    entry: `./src/index.js`,
    // ファイルの出力設定  
    output: {    //  出力ファイルのディレクトリ名
        path: `${ __dirname }/dist`,    // 出力ファイル名  
        filename: "main.js"
    },
    devServer: {
        contentBase: "dist",
        open: true
    }
};
