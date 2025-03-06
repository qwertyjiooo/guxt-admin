# guxt-admin

## 项目分析
- vue@3.5.13
- vue-router@4.5.0
- element-plus@2.9.4
- pinia
- axios
- less
- sass
- tailwindcss
- vite

## 技术文档
- vue: https://cn.vuejs.org/
- vue-router: https://router.vuejs.org/zh/
- element-plus: https://element-plus.org/zh-CN/
- pinia: https://pinia.vuejs.org/
- axios: https://axios-http.com/
- less: https://lesscss.org/
- sass: https://sass-lang.com/
- tailwindcss: https://tailwindcss.com/
- vite: https://cn.vitejs.dev/

## 环境说明
- node: v20.12.2
- npm: 10.5.0
- pnpm: 10.5.2

## 目录说明

```
guxt-admin
│
└── public 
│
└── src
│   ├── api  ： 请求与接口配置文件
│   ├── assets ： 静态资源文件
│   ├── components  ： 公共组件存放文件
│   └── layout  ： 布局组件文件
│       ├── aside  ： 侧边栏组件
│       ├── header  ： 头部组件
│       ├── main  ： 主内容组件
│       └── index.veu  ： 布局组件入口文件
|   └── router  ： 路由配置文件
│       ├── modules  ： 路由模块文件
│       ├── index.js  ： 路由入口文件
│       └── routes.js  ： 路由配置文件
|   ├── store  ： pinia状态管理文件
|   └── style  ： 全局样式文件
│       ├── element  ： element-plus样式文件
│       ├── reset  ： 全局样式重置文件
│       ├── tailwind  ： tailwind样式文件
│       └── index.css  ： 全局样式入口文件
|   ├── utils  ： 工具函数文件
│   ├───views  ： view视图组件文件
│   ├───App.jsx  ： 入口文件
│   └───main.jsx  ： 主入口文件
└── .env.development  ： 开发环境配置文件
│
└── .env.production  ： 生产环境配置文件
│
└── .gitignore  ： git忽略文件
│
└── components.d.ts  ： 组件类型声明文件
│
└── index.html  ： 入口html文件
│
└── jsconfig.json  ： js配置文件
│
└── package.json  ： 项目配置文件
│
└── postcss.config.js  ： postcss配置文件
│
└── README.md  ： 项目说明文件
│
└── tailwind.config.js  ： tailwind配置文件
│
└── vite.config.js  ： vite配置
```

## 项目启动
- npm | pnpm i
- npm | pnpm run dev


项目创建日期：2025-1-10
