## Docker基础 

### 概念
- 是一个应用容器引擎 基于Go语言开发 使用沙箱机制 容器的性能开销很低

### Docker的应用场景
- Web应用的自动化打包和发布
- 自动化测试和持续集成 发布
- 在服务型环境中部署和调整数据库后其他后台应用

### 与传统虚拟机的比较
- Docker 启动很快  占用体积小

### 组成
- docker 守护进程
- 仓库: 共有 私有
- 镜像
- 容器
- docker客户端

### 意义
- 使用Docker可以实现开发人员的开发环境 测试人员的测试环境 运维人员的生产环境的一致性

### 镜像的相关指令
- Docker 镜像是由文件系统叠加而成的(一种文件的存储形式) 可以理解为对某些运行环境或者软件打的包 用户可以从decker的仓库下载基础镜像到本地 
- 查看镜像 docker images 
- 镜像的搜索 docker search centos7 
- 镜像的拉取 docker pull centos:7 (如果不指定版本号 则拉取最新的版本)
- 镜像的删除 docker rmi + IMAGE ID  (docker rmi 'docker images -q' 全部删除)

### 查看 & 创建并启动容器
- 查看正在运行的容器 docker ps
- 查看所有的容器 docker ps -a
- 创建并启动容器 docker run -it --name=mycentos7 centos /bin/bash
    - 参数说明: 
    > -i 表示运行容器 <br/>
    > -t 表示启动容器后会进入命令行 容器创建就能进去 分配一个伪终端 <br/>
    > -v 目录映射 最好做目录映射 在宿主机上做修改 然后共享到容器上
    > -d 创建守护式容器在后台运行
    > -p 表示端口映射 
    > -rm 容器 stop时 容器会被清理 (很明显不能和 -d 一起使用)
- 交互式容器 docker run -it --name=mycentos7 centos /bin/bash
    - 已交互式方式创建并启动容器 启动完成后 直接进入当前容器 
    - 注意:
    > 使用 exit 命令退出 注意: 此容器退出 容器就进入 停止状态
- 守护式容器 : 可以在后台运行
    - 创建并启动  docker run -id --name=mycentos2 centos
    - 容器启动后再进入 docker exec -it mycentos2(或者id) /bin/bash
    - 注意
    > 守护式容器启动后会在后台一直运行 执行 exit 命令退出 也不会停止容器

### 容器的操作
- 查看已经创建的容器 docker ps -a
- 查看正在运行的容器 docker ps
- 停止容器 docker stop 名称(|id)
- 启动容器 docker start 名称(|id)
- 删除容器 docker rm 9ocd122ds
- 删除所有容器 docker rm $(docker ps -a -q)
- 文件拷贝 
    - 把当前文件夹的 Mac.md 拷贝到容器 docker cp Mac.md mycentos2:/ 
    - 把容器中的文件复制到 当前目录 docker cp mycentos2:/abc.js ./
- 目录挂载 
    - docker run -id -v /usr/local/test:/use/local/test --name=mycentos3 centos
    - 宿主机目录 : 容器目录

### nginx 反向代理 web 项目的dockerfile 文件
```ssh
# develop stage
FROM node:11.1-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --registry https://registry.npm.taobao.org
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm run build
# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```sh
# nginx.conf 
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    server {
        listen 80;

        location / {
            root /usr/share/nginx/html;
            index index.html;
            try_files $uri $uri/ /index.html;
        }

        location /api {
            rewrite ^/api/(.*)$ /$1 break;
            proxy_pass http://backend:9000;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }

}

```
### 根据当前路径的 dockerfile  构建镜像
```
docker build -t nginx:v5 .  // nigix:v5 自己定义的镜像名称

 docker build -t 192.168.1.131/fate/nginx:v11 . //  这样就可以不用打tag 直接推到 lab了
```
### 把本地的镜像 打个tag (然后就可以推送到 harbo了)
```
docker tag nginx:v11  192.168.1.131/fate/nginx:v11  
```
## 登录前要设置 docker 客户端的本地配置

setting--> Docker Engine --> 
```
{
  "registry-mirrors": [
    "https://r16ktk1i.mirror.aliyuncs.com"
  ],
  "debug": true,
  "experimental": false,
  "insecure-registries": ["192.168.1.131"] // 关键行  要和 harbor 保持一致
}
```
### 推前要先登录

```
docker login 192.168.1.131 -u harbor -p Harbor12345
```
### 把构建好的镜像 推到 harbo
```
docker push 192.168.1.131/fate/nginx:v11
```
### 根据镜像名称 run 出来容器 -p 后跟端口映射(本机端口 : 容器的端口)

```
docker run -p 8080:80 nginx:v1
```

## 关于 docker-compose 

### 安装
```
```
### yaml 文件

```sh
version: '2.3'
services:
  db:
    image: 192.168.1.131/fate/mysql:8.0
    volumes:
      - $PWD/mysql:/var/lib/mysql
    restart: always
    command:
      - mysqld
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
    environment:
      MYSQL_ROOT_PASSWORD: platform
      MYSQL_DATABASE: ppc
      MYSQL_USER: ppc_user_dev
      MYSQL_PASSWORD: 111111
      TZ: Asia/Shanghai
    networks:
      - platform
    healthcheck:
      test: [ "CMD", "mysqladmin" ,"ping", "-h", "localhost" ]
      timeout: 45s
      interval: 10s
      retries: 10
  db-migrate:
    depends_on:
      db:
        condition: service_healthy
    image: 192.168.1.131/fate/mysql:8.0
    restart: on-failure
    entrypoint:
      - sh
      - -c
    command:
      - |
        set -ex
        for sql in `ls -v /migrations/*.sql`; do
          sleep 1
          mysql -hdb -u$${MYSQL_USER} -p$${MYSQL_PASSWORD} \
          --default-character-set=utf8mb4 $${MYSQL_DATABASE} < $$sql
        done
        echo "Scripts run completed"
    environment:
      MYSQL_DATABASE: ppc
      MYSQL_USER: ppc_user_dev
      MYSQL_PASSWORD: 111111
      TZ: Asia/Shanghai
    volumes:
      - $PWD/ppc.sql:/migrations/ppc.sql
    networks:
      - platform
  backend:
    depends_on:
      db:
        condition: service_healthy
    image: 192.168.1.131/fate/ppc-console:latest
    restart: always
    networks:
      - platform
    ports:
      - 9000:9000
  frontend:
    depends_on:
      - backend
    image: 192.168.1.131/fate/nginx:v11
    restart: always
    networks:
      platform:
    ports:
      - 8086:80
    volumes:
      - $PWD/nginx.conf:/etc/nginx/nginx.conf
networks:
  platform:
    external: false

```

### docker-compose up 命令 

- 格式为 docker-compose up [options] [SERVICE...] 该命令可以自动完成包括构建镜像，(重新)创建服务，启动服务，并关联服务相关容器的一系列操作。

- 默认情况下，docker-compose up启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。当通过Ctrl+c停止命令时，所有容器将会停止。如果希望在后台启动并运行所有的容器，使用docker-compose up -d。

- 如果服务容器已经存在，并且在创建容器后更改了服务的配置(即docker-compose.yml文件)或者镜像，那么docker-compose会停止容器，然后重新创建容器。

- 注意： 这里的镜像修改指的是已经拉取到本地的镜像更改。当你的镜像仓库内容有变化，不会影响到本地的服务容器。如果你想更新本地的镜像，可以使用docker-compose pull [serviceName]。


### 镜像重命名  
```sh
docker tag harbor.prod.iluvatar.com.cn/nerf_platform_frontend/nerf_platform_frontend:23.12.01 harbor.iluvatar.com.cn:10443/nerf_platform_frontend/nerf_platform_frontend:23.12.01 
docker tag 老名字 新名字
```

### 把镜像保存到本地
```js
docker save -o xxx.tar harbor.iluvatar.com.cn:10443/nerf_platform_frontend/nerf_platform_frontend:23.12.01
```
