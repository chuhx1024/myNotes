# Vue-Router
### 基础回顾
#### Hash 和 history 模式的区别
- 原理的区别
    - Hash:基于锚点 以及 onhashchange 事件
    - History 模式: 
        - 基于 HTML5 中的 History API 
        - history.pushState() IE 10 以后才支持 它和 history.push 的区别是  不会向服务器发请求 只会给变 url 的地址 并且把地址记录到浏览器的历史记录中
        - history.replaceState() 
#### History 模式的使用
- History 模式需要服务器的支持
    - 因为正常使用 history 模式没有问题  因为 基于 history.pushState() 不会向服务器发请求
    - 但是刷新页面 就不行了  就会请求 服务器 就会报 404
    - 所以要在服务器配置 除了静态资源外都返回单页面应用程序的 index.html

- node 服务器的配置
    - 使用 express 框架 可以很快搭建一个前端静态服务器
    - 如果不做特殊处理  正常访问 前端项目 没有一点问题 但是不能刷新页面  刷新 就会真实的请求服务器了 node 服务器 就输出一个默认的 404 页面 就报错了
    - 处理方法  使用 需要使用一个中间件 connect-history-api-fallback
    ```js
    const path = require('path')
    const history = require('connect-history-api-fallback')
    cosnt express = require('express')
    const app = express()
    app.use(history())
    app.use(express.static(path.join(__dirname, '../web')))
    app.listen(3000, () => {
        console.log('我的服务器起来了 监听 3000端口')
    })
    ```
- nginx 服务器的配置
    - nginx 配置过程
        - 官网下载安装包
        - 解压后放到c盘中, c:\nginx-1.18.0 路径不能有中文
        - 命令行 切换到目录 c:\nginx-1.18.0  
        - 关键目录
            - html  前端项目 就 放这里
            - conf nginx 的 配置目录
        ```sh
        # 启动
        start nginx
        # 重启
        nginx -s reload
        # 停止
        nginx -s stop
        ```
    - 如果不做特殊处理  正常访问 前端项目 没有一点问题 但是不能刷新页面  刷新 就会真实的请求服务器了 nginx 服务器 就输出一个默认的 404 页面 就报错了
    - 处理方法 添加 try_files $uri $uri/ /index.html;
    ```js
    server {
        listen 80;

        location / {
            root /usr/share/nginx/html;
            index index.html;
            try_files $uri $uri/ /index.html;  // 这行代码 就是为了 处理404  意思就是 如果找不到 url  就返回 index.html
        }

        location /api {
            # rewrite ^/api/(.*)$ /$1 break;
            proxy_pass http://management:8075/api;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

### Vue Router 实现原理

