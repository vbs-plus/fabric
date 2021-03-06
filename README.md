<!-- @format -->

Language : πΊπΈ | [π¨π³](./README.zh-CN.md)

# @vbs/fabric

A collection of configuration files containing prettier, eslint, stylelint. It is based on [@umijs/fabric](https://github.com/umijs/fabric).

# Use

## Support
* [x] React + Typescript
* [x] React + Javascript
* [x] Vue + Typescript
* [x] Vue + Javascript
* [ ] Alipay Mini program
* [ ] Wechat Mini program
## Install

```bash
npm i @vbs/fabric --save-dev
yarn add @vbs/fabric -D
```

In your project's root directory creating the configuration file shown below:

> - `.editorconfig`: a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.
> - `.eslintignore`: a file to tell [ESLint](https://eslint.org/) to ignore specific files.
> - `.eslintrc.js`: an object configuration file for [ESLint](https://eslint.org/).
> - `.prettierignore`: a file to tell [prettier](https://prettier.io/) to ignore specific files.
> - `.prettierrc.js`: an object configuration file for [prettier](https://prettier.io/).
> - `.stylelintrc.js`: an object configuration file for [stylelint](https://stylelint.io/).

## Configuration

### Common Config

The config examples:

in `.editorconfig`

```tex
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

in `.eslintignore`

```tex
/lambda/
/scripts
/config
.history
public
dist
.umi
mock
```

in `.prettierignore`

```tex
**/*.svg
package.json
.umi
.umi-production
/dist
.dockerignore
.DS_Store
.gitignore
.eslintignore
*.png
*.toml
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
.history
CNAME
/build
/public
```

### React

in `.eslintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/react/eslint')],
};
```

in `.prettierrc.js`

```javascript
const fabric = require('@vbs/fabric');
const { ReactConfig } = fabric;

module.exports = {
  ...ReactConfig.prettier,
};
```

in `.stylelintrc.js`

```javascript
const fabric = require('@vbs/fabric');
const { ReactConfig } = fabric;

module.exports = {
  ...ReactConfig.stylelint,
};
```

### Vue

in `.eslintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/vue/eslint')],
};
```

in `.prettierrc.js`

```javascript
const fabric = require('@vbs/fabric');
const { VueConfig } = fabric;

module.exports = {
  ...VueConfig.prettier,
};
```

in `.stylelintrc.js`

```javascript
const fabric = require('@vbs/fabric');
const { VueConfig } = fabric;

module.exports = {
  ...VueConfig.stylelint,
};
```

### Mini Program

todo
