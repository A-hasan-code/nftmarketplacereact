const path = require('path');


const webpack = require('webpack');

module.exports = {
  // ...
  target: 'node', // Set the target environment to Node.js
  // ...
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      fs: false, // Exclude 'fs'
      https: false, // Exclude 'https'
      http: false, // Exclude 'http'
      net: false, // Exclude 'net'
      path: require.resolve('path-browserify'), // Use 'path-browserify' instead of 'node:path'
      stream: require.resolve('stream-browserify'), // Use 'stream-browserify' instead of 'node:stream'
      url: require.resolve('url/'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'), // Use 'browserify-zlib' instead of 'node:zlib'
    },
  },
};
