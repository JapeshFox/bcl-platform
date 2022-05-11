let config = require('config/eslint-preset.js');
config = {
  ...config,
  extends: ['plugin:storybook/recommended', ...config.extends],
  rules: {
    ...config.rules,
    'react/prop-types': 0,
  },
};
module.exports = config;
