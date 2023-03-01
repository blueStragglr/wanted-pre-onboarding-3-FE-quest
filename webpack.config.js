const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

const prod = process.env.NODE_ENV === "production"

module.exports = {
  mode: prod ? "production" : "development", // 개발용인지 배포용인지 따라 db나 서버 등이 달라 질 수 있음
  devtool: prod ? "hidden-source-map" : "eval", // 개발을 하기 위한 옵션
  entry: "./src/index.tsx", // 웹팩이 파일을 읽어들이기 시작. 여러 파일을 넣을 수도 있다.
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 사용할 수 있는 파일 확장자
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"], // loader를 여기 적어준다.
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"), // 해석한 결과를 어디에
    filename: "bundle.js", // 파일 이름 '[name].js' '[hash].js'매번 랜덤하게
  },
  optimization: {
    minimize: false, // 기본적으로 minify가 되어서 나오기 때문에, false로 설정.
  },
  plugins: [
    // 부가적
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
}
