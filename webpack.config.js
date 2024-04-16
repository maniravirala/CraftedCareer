// webpack.config.js

module.exports = {
    // Other webpack config options...
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify")
      }
    }
  };
  