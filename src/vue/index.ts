/** @format */
const vue_prettier = require('./prettier');
const vue_strictEslint = require('./eslint');
const vue_softyEslint = require('./softyEslint');
const vue_stylelint = require('./stylelint');

module.exports = {
  stylelint: vue_stylelint,
  prettier: vue_prettier,
  strictEslint: vue_strictEslint,
  eslint: vue_softyEslint,
  default: vue_softyEslint,
};
