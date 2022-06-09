```
 ________  _______   ________  ________ _________
|\   __  \|\  ___ \ |\   __  \|\   ____\\___   ___\
\ \  \|\  \ \   __/|\ \  \|\  \ \  \___\|___ \  \_|
 \ \   _  _\ \  \_|/_\ \   __  \ \  \       \ \  \
  \ \  \\  \\ \  \_|\ \ \  \ \  \ \  \____   \ \  \
   \ \__\\ _\\ \_______\ \__\ \__\ \_______\  \ \__\
    \|__|\|__|\|_______|\|__|\|__|\|_______|   \|__|
```

## 简介

react-example。使用 `Vite + React + TypeScript + React-Router + Redux-Toolkit + Material-UI + react-i18next` 开发。支持多语言和暗黑模式。

## 使用技术

- [Vite](https://www.vitejs.net/) - 构建工具
- [React](https://zh-hans.reactjs.org/) - 框架
- [React Router](https://reactrouter.com/docs/en/v6) - 路由
- [React Redux](https://react-redux.js.org/) - 状态管理
- [Redux Toolkit](https://redux-toolkit.js.org/) - 编写 Redux 逻辑的方法
- [Material UI](https://mui.com/zh/material-ui/getting-started/usage/) - ui 库
- [react-i18next](https://react.i18next.com) 多语言

## [online-demo](https://jyoketsu.github.io/react-example/)

## 安装

```
yarn
```

## 启动服务

```
yarn dev
```

## 编译并发布

```
yarn deploy
```

## 注意

将本项目用户新建项目时，注意将.env 文件中的`VITE_BASE=/react-example/`改为`VITE_BASE=/`，原因见[github-pages](https://cn.vitejs.dev/guide/static-deploy.html#github-pages)，.github/workflows 中的部署至 github-pages 也改为自己的部署。
