# Nginx
## 介绍
- Nginx ("engine x")是一个高性能的HTTP和反向代理服务器，特点是占有内存少，并发能力强，
- 有报告表明能支持高达50000个并发连接数。

## Nginx 可以提供的服务
- web服务
- 负载均衡(反向代理)
- web cache

## Ngnix 的优点
- 高并发。静态小文件
- 占用资源少。2万并发、10个线程，内存消耗几百M。
- 功能种类比较多。web,cache,proxy。每一个功能都不是特别强。
- 支持epoll模型，使得nginx可以支持高并发。
- nginx 配合动态服务和Apache有区别。（FASTCGI 接口）
- 利用nginx可以对IP限速，可以限制连接数。
- 配置简单，更灵活。

## 应用场景
- 静态服务器。（图片，视频服务）另一个lighttpd。并发几万，html，js，css，flv，jpg，gif等。
- 动态服务，nginx——fastcgi 的方式运行PHP，jsp。（PHP并发在500-1500，MySQL 并发在300-1500）。
- 反向代理，负载均衡。日pv(点击量)2000W以下，都可以直接用nginx做代理。
- 缓存服务。类似 SQUID,VARNISH

## 基础配置文件
```
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
### 测试配置文件是否正常
shell> /data/nginx/sbin/nginx -t 
nginx: the configuration file /data/nginx-1.10.3/conf/nginx.conf syntax is ok
nginx: configuration file /data/nginx-1.10.3/conf/nginx.conf test is successful
shell> curl -I http://localhost
HTTP/1.1 200 OK


```

## 具体案例

### 使用nginx反向代理，根据访问的路径跳转到不同端口的服务中
```
server {
    listen       9001;
    server_name  192.168.208.134;

    location ~/badao/ {
        proxy_pass http://127.0.0.1:8080;
    }

    location ~/liumang/{
        proxy_pass http://127.0.0.1:8081;
    }
}
```

### 负载均衡
```
http {
    upstream myproject {
        server 127.0.0.1:8000;
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }
    server {
        listen 80;
        server_name www.domain.com;
        location / {
            proxy_pass http://myproject;
        }
    }
}
```
#### 分配策略
##### 1. 轮询(默认) 
- 每个请求按时间顺序逐一分配到不 同的后端服务器，如果后端服务器down掉，能自动剔除
##### 2. weight 
- weight代表权重默认为1,权重越高被分配的客户端越多。指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
```
upstream myproject {
    server 127.0.0.1:8000 weight=3;
    server 127.0.0.1:8001;
    server 127.0.0.1:8002;
    server 127.0.0.1:8003;
}
```
##### 3. ip hash
- 每个请求按访问ip的hash结果分配, 这样每个访客固定访问一个后端服务器,可以解诀session的问题。
```
upstream myproject {
    ip_ hash
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
    server 127.0.0.1:8002;
    server 127.0.0.1:8003;
}
```
##### 4. fair (第三方)
- 按后端服务器的响应时间来分配请求，响应时间短的优先分配
```
upstream myproject {
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
    server 127.0.0.1:8002;
    server 127.0.0.1:8003;
    fair;
}
```
### 动静分离
```
#动静分离
server {
	listen 80;
	server_name ds.com;
	
	location / {
		root /web;
		index index.html;
	}
	
	location ~* .*\.(png|jpg|gif)$ {
		root /web/images;
	}
}
```