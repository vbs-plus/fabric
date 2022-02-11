/** @format */
const react_strictEslint = require('./eslint');
const react_softyEslint = require('./softyEslint');
const react_stylelint = require('./stylelint');
const react_prettier = require('./prettier');

module.exports = {
  stylelint: react_stylelint,
  prettier: react_prettier,
  strictEslint: react_strictEslint,
  eslint: react_softyEslint,
  default: react_softyEslint,
};
