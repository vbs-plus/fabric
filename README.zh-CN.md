<!-- @format -->

Language : [🇺🇸](./README.md) | 🇨🇳

# @vbs/fabric

一个包含 prettier，eslint，stylelint 的配置文件合集. 其基于[@umijs/fabric](https://github.com/umijs/fabric)。

# 使用教程

## 支持

- [x] React + Typescript
- [x] React + Javascript
- [x] Vue + Typescript
- [x] Vue + Javascript
- [ ] Alipay Mini program
- [ ] Wechat Mini program

## 安装

```bash
npm i @vbs/fabric --save-dev
yarn add @vbs/fabric -D
```

在你的工程项目根目录下创建如下所示的配置文件:

> - `.editorconfig`: 用于保持不同编辑器及 IDE 的代码编写规范的格式化文本配置插件;
> - `.eslintignore`: 用于指定[ESLint](https://eslint.org/)忽略特定文件的配置;
> - `.eslintrc.js`: [ESLint](https://eslint.org/)的对象配置文件;
> - `.prettierignore`: 用于指定[prettier](https://prettier.io/)忽略特定文件的配置;
> - `.prettierrc.js`: [prettier](https://prettier.io/)的对象配置文件;
> - `.stylelintrc.js`: [stylelint](https://stylelint.io/)的对象配置文件;

## 配置

### 通用配置

通用配置案例:

`.editorconfig`文件

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

`.eslintignore`文件

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

`.prettierignore`文件

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

`.eslintrc.js`文件

```javascript
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/react/eslint')],
};
```

`.prettierrc.js`文件

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

`.eslintrc.js`文件

```javascript
module.exports = {
  extends: [require.resolve('@vbs/fabric/dist/vue/eslint')],
};
```

`.prettierrc.js`文件

```javascript
const fabric = require('@vbs/fabric');
const { VueConfig } = fabric;

module.exports = {
  ...VueConfig.prettier,
};
```

`.stylelintrc.js`文件

```javascript
const fabric = require('@vbs/fabric');
const { VueConfig } = fabric;

module.exports = {
  ...VueConfig.stylelint,
};
```

### Mini Program

todo
