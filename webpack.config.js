const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'), // Serve from the project root
      publicPath: '/', // Ensure the root is accessible
      serveIndex: true, // Show directory index
    },
    devMiddleware: {
      writeToDisk: true, // Write files to disk in dev mode, optional
    },
    historyApiFallback: {
      index: '/index.html', // Serve index.html for all routes to support SPA routing, if needed
    },
    port: 8080, // Default port is 8080, but you can specify another
  },
  
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'], // For loading images
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'], // For shaders
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ],
  }
};
