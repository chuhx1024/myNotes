# 注册 + 购买

（也可以使用 阿里云  / 百度云 / 京东云 / 华为云 等等）

[**视频讲解**](https://www.bilibili.com/video/BV14v4117712)

#### [1.注册链接](https://passport.ucloud.cn/#register)

https://passport.ucloud.cn/#register

![register_a](images/register_a-1618097101509.png)

**注册最后需要激活邮箱**

![active](images/active.png)

#### [2.实名认证地址](https://accountv2.ucloud.cn/authentication)

https://accountv2.ucloud.cn/authentication

**实名认证：**需要添写「身份信息」以及「绑定银行卡」

![2021-04-11_073455](images/2021-04-11_073455.png)



#### [3.购买链接](https://www.ucloud.cn/site/active/lagou.html)

https://www.ucloud.cn/site/active/lagou.html?ytag=lagou0910

![buy1](images/buy1.png)



#### 4.操作系统

**必须 CentOS**

![buy2](images/buy2.png)

**付款后提示创建成功**

![buy3](images/buy3.png)

细节:

为运行稳定，服务器会尽量少安装程序，一般不要图形界面，使用类似 CMD 的命令行方式操作.



#### 5.要记住的信息

服务器-**外网IP**  106.75.9.111 

服务器-账号       root

服务器-密码       lagou12345689!



UCloud 官网-邮箱账号

UCloud 官网-登录密码



# 配置

[**视频讲解**](https://www.bilibili.com/video/BV14v4117712?p=2)

#### 防火墙 - 页面中配置

![firewall1](images/firewall1.png)

![firewall2](images/firewall2.png)

![firewall3](images/firewall3.png)

![firewall4](images/firewall4.png)

![firewall5](images/firewall5.png)

![firewall6](images/firewall6.png)

![firewall7](images/firewall7.png)

![firewall8](images/firewall8.png)



![firewall9](images/firewall9.png)



![firewall10](images/firewall10.png)



![firewall11](images/firewall11.png)



![firewall12](images/firewall12.png)

![firewall13](images/firewall13.png)



#### 端口 port

不同的程序使用不同的端口

22 / 80 / 443 / 1337 / 3000 / 3306 / 8080 /

0 ~ 1024  系统保留   计算机共有65535个端口

6666 谷歌浏览器中默认不可用 

**端口与服务器详解**



# 登录

[**视频讲解**](https://www.bilibili.com/video/BV14v4117712?p=3)

#### 方式1：git bash  或  CMD   

![ssh1](images/ssh1.png)

**如果遇到错误：**

![ssh2](images/ssh2.png)

![ssh3](images/ssh3.png)



#### 方式2：Xshell 方式 （推荐）

**官网下载**

```
https://www.xshellcn.com/xiazai.html
https://www.netsarang.com/zh/free-for-home-school/
```

**网盘下载**

```
链接：https://pan.baidu.com/s/1wyWsKsl_g0UD5TOBVoFBuA 
提取码：love
```

**第三方下载**

```
https://gitee.com/2xx/mytools/raw/master/xshell_xftp.zip
```

**安装 / 连接登录 / 上传 （笔记略. 见视频中）**



# 安装环境

[**视频讲解**](https://www.bilibili.com/video/BV14v4117712?p=4)

#### 方式1：脚本安装

**安装 node / pm2 / 配置相关路径**

```shell
nver='v14.16.1' && ndir="node-${nver}-linux-x64" && nfile="${ndir}.tar.xz" && cd /usr/local && wget https://nodejs.org/dist/$nver/$nfile && tar xvf $nfile && mv $ndir nodejs && rm -rf $nfile && cd nodejs/bin && ln -sf `readlink -f node` /usr/bin/node && ln -sf `readlink -f npm`  /usr/bin/npm && ln -sf `readlink -f npx`  /usr/bin/npx && npm config set registry http://registry.npm.taobao.org && npm i pm2 -g && ln -sf `readlink -f pm2`  /usr/bin/pm2 && cd
```

（ 官网下载地址：https://nodejs.org/zh-cn/download/ ）

**命令解释**

```shell
# 命令1 && 命令2   命令1执行完成后，再执行命令2
nver='v14.16.1'                 #定义版本变量 nver
ndir="node-${nver}-linux-x64"   #定义目录变量 ndir 
nfile="${ndir}.tar.xz"          #定义压缩文件名变量 nfile

cd /usr/local                   #切换目录
wget https://nodejs.org/dist/$nver/$nfile  $下载文件
tar xvf $nfile    #文件拆包解压
mv $ndir nodejs   #对目录重命名
rm -rf $nfile     #删除压缩包文件

cd nodejs/bin     #进入目录

# 获取真实路径, 软链接到 /usr/bin 中, 使命令全局可用. -f为强制创建，会覆盖
ln -sf `readlink -f node` /usr/bin/node
ln -sf `readlink -f npm`  /usr/bin/npm
ln -sf `readlink -f npx`  /usr/bin/npx


# 配置镜像
npm config set registry http://registry.npm.taobao.org
# 全局安装pm2
npm i pm2 -g   
# 建立软链接. 使pm2全局使用
ln -sf `readlink -f pm2`  /usr/bin/pm2
# 返回家目录
cd
```



#### 方式2：通过 nvm 安装

 **( github 不稳定，暂时不用这种方式 )**

```shell
# 1.安装 nvm
cd
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# 2.断开+重新连接 或 执行下面命令使 nvm 生效
  source ~/.bashrc # bash
# source ~/.zshrc  # zsh  MacOS ?

# 3.安装 node 稳定版
nvm install --lts

# 4.安装 pm2 到全局
npm i pm2 -g

# 5.建立软链接
nver='v14.16.1' && cd /root/.nvm/versions/node/$nver/bin &&  ln -sf `readlink -f node` /usr/bin/node && ln -sf `readlink -f npm`  /usr/bin/npm && ln -sf `readlink -f npx`  /usr/bin/npx && ln -sf `readlink -f pm2`  /usr/bin/pm2 && cd
```





#### 内部防火墙 - 关闭！关闭！关闭！

**( 建议不要开启内部防火墙 )**

```shell
# 关闭内部防火墙
systemctl stop firewalld      # 临时关
systemctl disable firewalld   # 永久关. 重启以后也是关着的

# 开启内部防火墙
#systemctl start firewalld

# 添加开放端口规则
#firewall-cmd --zone=public --add-port=22/tcp   --permanent
#firewall-cmd --zone=public --add-port=80/tcp   --permanent
#firewall-cmd --zone=public --add-port=443/tcp  --permanent
#firewall-cmd --zone=public --add-port=1337/tcp --permanent
#firewall-cmd --zone=public --add-port=3000/tcp --permanent
#firewall-cmd --zone=public --add-port=3306/tcp --permanent
#firewall-cmd --zone=public --add-port=8080/tcp --permanent

# 重新加载规则. 使之立刻生效.
#firewall-cmd --reload
```



# 测试

[**视频讲解**](https://www.bilibili.com/video/BV14v4117712?p=5)

主要流程：把 server.js 复制到服务器，然后执行它。通过浏览器访问测试结果。 

#### server.js 测试文件

（可以复制下面代码，或 点击下载）

```js
const http = require('http')

// 1.创建 web服务器
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('拉勾教育')
})
// 2.设置 web服务器 监听3000端口
server.listen(3000, () => {
    console.log('服务器运行了')
})
```



#### 上传文件

**方式一：本地 scp 命令**

上传:  scp  本地文件   root@服务器外网IP:服务器上面的路径

下载:  scp  root@服务器外网IP:服务器上面的路径  本地文件

![ftp1](images/ftp1.png)



**方式二：Xshell （推荐）**



#### 运行测试

**普通**

```shell
node server.js
```

**pm2**

```shell
# 开启任务
pm2 start 'node server.js' --name MyServer

# 结束任务
pm2 delete MyServer
```



**pm2 常用命令**

pm2  start  'npm run start'  --name  xxx   开启任务,并命名为xxx

pm2  list    查看任务列表

pm2  delete  任务ID   结束并删除指定ID号的任务

pm2  info  任务ID   可以查看任务相关信息



