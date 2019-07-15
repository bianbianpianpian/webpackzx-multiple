# 项目名称：{{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

模拟端口号：18001

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

注：
	1 全局搜索fpe-demo 和 18001，根据不同项目进行修改
	2 删掉/fed-server/node_modules，重新执行 npm i pm2 body-parser cookie-parser express nornj path lodash --save，启动后端mock服务，cd fed-server， npm run server
	3 删掉node_modules，重新执行 npm install，启动程序 npm start

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
