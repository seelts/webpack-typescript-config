module.exports = {
  resolve: { extensions: ['.tsx', '.ts', '.js', '.json'] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['ts-loader'], exclude: /node_modules/ },
    ],
  },
};
