## 购买阿里云 ECS
- 首次使用 要 重置实例密码
- 在 网络与安全 --> 秘钥对 中添加本机的 /.ssh/id_rsa.pub 就可以免密 用 ssh  访问了
- 阿里云 默认 只暴露 22 端口   给  ssh 使用
    - 要在安全组中给 暴露其他的端口
  



## 安装 git
```sh
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel git-core
```
## 安装 node
```sh
yum install -y wget
wget https://npm.taobao.org/mirrors/node/v14.0.0/node-v14.0.0-linux-x64.tar.gz
# 安装高版本   https://npm.taobao.org/mirrors/node/  注意修改下路就可以了

# 解压
tar -xvf node-v14.0.0-linux-x64.tar.gz

cd node-v14.0.0-linux-x64
yum install gcc gcc-c++

# 移动文件
mv node-v14.0.0-linux-x64 /usr/local/node-v14.0.0
# 建立软连接 类似设置环境变量
ln -s /usr/local/node-v14.0.0/bin/npm /usr/local/bin/npm
ln -s /usr/local/node-v14.0.0/bin/node /usr/local/bin/node

# 设置淘宝源
npm config set registry http://registry.npm.taobao.org/
# 检查是否更换成功
npm config get registry

```

## 拉取 前端项目代码
```sh
git clone xxxxxxxxx
npm i 
npm run build
npm run start
```


## 安装 nginx
```sh
sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
sudo yum install -y nginx

# 启动 nginx

sudo systemctl start nginx.service

# 查看 nginx 运行状态
ps -ef | grep nginx
```

- nginx 添加配置 
```sh
cd /ect/nginxconf.d

# 添加一个文件
# vim website.conf
server {
  listen 3080;
  # server_name  www.bgwhite.cn;
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
  #error_page 404 = http://www.bgwhite.cn/404.html;
}

# 检测 nginx 配置是否成功 可用
nginx -t
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful 

# 重启 nginx -s reload

```