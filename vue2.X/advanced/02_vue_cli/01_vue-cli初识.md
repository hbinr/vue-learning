## [vue-cli](https://cli.vuejs.org/zh/)(脚手架)

### 为什么要用vue-cli

> 可以快速创建vue项目结构,而不需要我们一点点的去创建/管理项目所需要的各种文件夹/文件

### 什么是vue-cli

> vue-cli是npm包

```cmd
vue-cli 提供一个官方命令行工具，可用于快速搭建大型单页应用。
```

### 使用vue-cli

```cmd
# 安装 Vue CLI 脚手架
# 如果已经安装过则不需要
# 这里安装的是最新版本 3版本
npm install -g @vue/cli

# 执行vue --verson查看是否安装成功，
# 显示vue的版本，就是安装成功了
vue -V

# 如果仍然要使用vue-cli 2版本的指令 需要安装一个桥接工具
npm install -g @vue/cli-init

# 使用脚手架工具初始化你的项目
# webpack-simple是一种工程模板
vue init webpack-simple 项目名称

# 进入你初始化好的项目
cd 项目路径

# 安装项目模板所需要的依赖
npm i

# 启动开发模式
# 或者 npm start
npm run dev
```

运行npm run dev后,会在浏览器中看到如下效果:

![1534009067048](./../../doc/assets/1534009067048.png)

### 项目目录说明

![1534009729744](./../../doc/assets/1534009729744.png)

- node_modules 项目依赖包
- **src 项目核心文件(项目核心代码都放在这个文件夹下)!!!**
- assets 静态资源(样式类文件,如css、less、sass以及外部的js文件)
- App.vue 根组件,所有页面都是在App.vue下进行切换的
- 也可以理解为所有的路由也是App.vue的子组件
- main.js 入口文件:主要作用是初始化vue实例并使用需要的插件（导包）。 
- .babelrc    babel配置参数，一般的都会使用ES6语法来开发，为了支持更低的ES版本，通过该配置自动生成支持低版本的代码
- .editorconfig  代码格式，注意其中**end_of_line**的配置  lf->Linux系统下回车用'\r'，单个字符表示；crlf -> Windows下回车用'\r\n'，两个字符表示。
  
- .gitignore   git忽略文件
- index.html  项目的首页  
- package-lock.json     专门用来锁住各个包的版本，下载链接等信息。因为npm install安装包依赖时，自动下载最新版本的包，项目初始建立时，包依赖是某个版本，当过一段时间后，某些包更新了版本，这时有开发者想clone项目进行开发或者学习，在其clone后也会执行npm install命令，这样就会在其本地重新下载一遍最新版本的包依赖，如果不锁住版本等信息的话，则会造成依赖冲突。因此使用package-lock.json来锁定包依赖的版本等信息，在初识开发时就需要规定好。
  
- package.json      包含各个包的版本，下载链接等配置信息
- README.md   项目说明 
- webpack.config.js    webpack配置文件

> 注意:
>
> 一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)
>
>  我们关心的重点是src中的文件夹

### [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

> 说明: 
>
> 1. *.vue 文件，是一个自定义的文件类型，用类似HTML的语法描述一个Vue组件。
> 2. 每个.vue文件包含三种类型的顶级语言块 `<template>`, `<script>` 和 `<style>`。
> 3. 这三个部分分别代表了 html,js,css。 

#### **template 部分**

- 代表它的 html 结构 
- 必须在里面放置一个 html 标签来包裹所有的代码 
- 我们在其他地方写好了一个组件，然后就可以在当前template中引入

#### **script 部分**

```js
export default {
    // 这里写你的代码,如
    el:,
    data:,
    props:
    // 省略
};
```

#### **style 部分**

 就是针对我们的 template 里内容出现的 html 元素写一些样式 

> 注意: vue-cli的作用就是让我们把精力放在业务编码上,一切准备的工作交给vue-cli去做
>
> 之后我们可以直接使用vue-cli去做案例或者项目

