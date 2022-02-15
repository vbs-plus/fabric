/** @format */

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  proseWrap: 'never',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
