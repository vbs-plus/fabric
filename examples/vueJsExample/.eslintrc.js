const path = require('path');

module.exports = {
  extends: [require.resolve(path.join(__dirname, '../../', 'dist/vue/eslint'))],
};
