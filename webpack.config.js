const path = require('path')

// Builds
const build = {

  // Default NPM build
  buildMain: {
    output: {
      library: 'vueBulmaToolTips',
      libraryTarget: 'umd2',
      filename: 'vue-bulma-tooltips.min.js'
    }
  },

  // VUE Standalone build
  buildStandalone: {
    output: {
      library: 'saVueBulmaToolTips',
      libraryTarget: 'var',
      filename: 'vue-bulma-tooltips.sa.js'
    }
  }

}

// Template
const buildTemplate = {

  js: {

    entry: {
      main: [
      //  'babel-polyfill',
        './src/directives/vue-bulma-tooltips/index.js'
      ]
    },

    output: {
      path: path.resolve(__dirname, 'dist')
    },

    module: {
      rules: [{
        test: /\.js?$/,
        exclude: /(node_modules|public|tests)/,
        loader: 'babel-loader',
        query: {
          presets: [
            // Production
            ['minify', {
              mangle: true,
              keepFnName: false,
              keepClassName: false
            }],
            // Development
            'stage-0'
          ]
        }
      }]
    }

  }

}

// Export desired builds
module.exports = []
for (let name in build) {
  module.exports.push(
    Object.assign({}, buildTemplate.js, build[name])
  )
}
