<!-- @format -->

# @vbs/fabric

一个包含 prettier，eslint，stylelint 的配置文件合集. 其基于[@umijs/fabric](https://github.com/umijs/fabric)。

A collection of configuration files containing prettier, eslint, stylelint. It is based on [@umijs/fabric](https://github.com/umijs/fabric).

# Use

安装

```bash
npm i @vbs/fabric --save-dev
yarn add @vbs/fabric -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/eslint')],

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const fabric = require('@vbs/fabric');

module.exports = {
  ...fabric.prettier,
};
```
