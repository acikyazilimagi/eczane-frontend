const path = require('path');

const buildEslintCommand = filenames => `npx eslint --fix --max-warnings=0`;

module.exports = {
  './src/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*/src/.{js,jsx,ts,tsx,css,svg}': ['yarn prettier-fix'],
};
