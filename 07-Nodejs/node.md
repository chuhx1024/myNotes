# Node.js

## 1. 清除 npm 的缓存
```sh
rm -r node_modules
npm cache clean
```
## 2. start 脚本
- 在 package.json 文件中定义的 "scripts" 对象中查找 "start" 属性， 如果此属性定义了任何命令则执行之。 如果 "scripts" 对象中没有定义 "start" 属性， 默认执行 node server.js 命令。



## 3. path 模块的使用
- 3.1 创建 main.js 文件，代码如下所示：
    ```js
        var path = require("path");

        // 格式化路径
        console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

        // 连接路径(注意理解 ../)
        console.log('join path : ' + path.join('/test', 'test1', '../2slashes/1slash', 'tab', '..'));

        // 转换为绝对路径
        console.log('resolve : ' + path.resolve('main.js'));

        // 路径中文件的后缀名
        console.log('ext name : ' + path.extname('main.js'));
    ```

- 执行结果
    ```js
        normalization : /test/test1/2slashes/1slash
        join path : /test/2slashes/1slash
        resolve : /Users/hxchu/workSpace/myNotes/07-Nodejs/WebScoket后端实现/main.js
        ext name : .js
    ```
- 3.2 path.dirname(path)
    - path.dirname() 方法会返回 path 的目录名
    ```js
        path.dirname('/目录1/目录2/目录3');
        // 返回: '/目录1/目录2'
    ```
- 3.3 __filename
    - 当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解析）
    ```js
        // 从 /Users/mjr 运行 node example.js：
        console.log(__filename);
        // 打印: /Users/mjr/example.js
        console.log(__dirname);
        // 打印: /Users/mjr
    ```

- 3.4 __dirname
    - 当前模块的目录名。 相当于 __filename 的 path.dirname()。
    ```js
        //示例，从 /Users/mjr 运行 node example.js：

        console.log(__dirname);
        // 打印: /Users/mjr
        console.log(path.dirname(__filename));
        // 打印: /Users/mjr
    ```
## 4. fs(文件系统)
- 4.1 同步读取文件
    ```js
        let result=fs.readFileSync('./1.txt','utf8');
    ```
- 4.2 异步读取文件
    ```js
        fs.readFile('./name.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    ```
- 4.3 同步写入文件 fs.writeFileSync("路径",写入的数据)
    ```js
        fs.writeFileSync("./1.txt",JSON.stringify({name:1}))
    ```
- 4.4 异步写入文件 fs.writeFile('路径',写入的数据,callback)
    ```js
    fs.writeFile('./1.txt','aaaaa',function (err) {
        if (err) {
            console.log(err);
        }
    })
    ```
- 4.5 根据读写 实现一个同步拷贝实例
    ```js
        const fs = require('fs')
        // 同步拷贝
        const copySynx = (source, target) => {
            // 同步读取
            let result = fs.readFileSync(source, 'utf8')
            // 同步写入
            fs.witeFileSync(target, result)
        }
        // 调用
        copySync('./age.txt', './a.txt')

    ```
- 4.6 异步拷贝
    ```js
        function copy(sourse,target,callback){
            //异步读取
            fs.readFile(sourse,'utf8',function(err,data){
                if(err){
                    return callback(err)
                }else{
                    //异步写入
                    fs.writeFile(target,data,callback)
                }
            });
        };
        copy('./name.txt','./ss.txt',function(err){
            if(err) return console.log(err)
            console.log('拷贝成功')
        }) 
    ```
- 4.7 判断文件是否存在
    ```js
        fs.existsSync('文件的路径')
    ```
- 4.8 获取文件信息
    ```js
        var fs = require('fs');

        fs.stat('sample.txt', function (err, stat) {
            if (err) {
                console.log(err);
            } else {
                // 是否是文件:
                console.log('isFile: ' + stat.isFile());
                // 是否是目录:
                console.log('isDirectory: ' + stat.isDirectory());
                if (stat.isFile()) {
                    // 文件大小:
                    console.log('size: ' + stat.size);
                    // 创建时间, Date对象:
                    console.log('birth time: ' + stat.birthtime);
                    // 修改时间, Date对象:
                    console.log('modified time: ' + stat.mtime);
                }
            }
        });
        // 运行结果如下:
        isFile: true
        isDirectory: false
        size: 181
        birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
        modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)
    ```
## 5. 利用node的util中的promisify 将异步封装为promise
- 利用promise封装异步读取文件(原生)
```js
const fs = require('fs')
let read = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8',(err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

read('./index.js').then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

// 也可以使用 catch() 实质就是 .then(null,reject)
read('./index.js').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
```

- 利用node的util中的 promiseify 将异步封装成 promise
```js
const fs = require('fs')
const util = require('util')

let read = util.promiseify(fs.readFile)
read('./index.js', 'utf-8').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
```

## process 进程
- cwd
```js
process.cwd() 方法返回 Node.js 进程的当前工作目录  就是 命令行执行的 目录。

const cwd = process.cwd()

// 使用可以读取文件
const config = {
    abc: 123,
}
try {
    loadConfig = require(`${cwd}/vue.config.js`)
    config = Object.assign({}, config, loadConfig)
} catch (e) {

}

console.log(`Current directory: ${cwd}`);
```


