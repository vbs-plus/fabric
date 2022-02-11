const path = require('path');

console.log(require.resolve(path.join(__dirname, '../../', 'dist/vue/eslint')))
module.exports = {
  extends: [require.resolve(path.join(__dirname, '../../', 'dist/vue/eslint'))],
};
