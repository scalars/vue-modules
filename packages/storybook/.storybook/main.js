module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register'
  ],
  configureWebpack: {
    externals: {
      'vue-property-decorator': 'Vue'
    }
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [ /\.vue$/ ]
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: 'vue-style-loader' },
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    });
    return config;
  }
};
