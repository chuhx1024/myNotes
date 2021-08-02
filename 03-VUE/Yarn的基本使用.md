## Yarn命令的使用
+ Yarn 是什么
    - “Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 . 是为了弥补 npm 的一些缺陷而出现的。
+ Yarn 的特定
    - 包的安装速度快
        * 利用并行下载以最大化资源利用率 
        * 缓存了每个下载过的包 已再次使用时无需重新下载
    - 安全 在执行代码前 yarn 会通过算法校验每个安装包的完整性
    - 可靠 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。
+ 安装
```
sudo npm install -g yarn
```
+ 常用方法
    - 初始化一个项目
    ```
    yarn init
    ```
    - 安装项目的所有依赖
    ```
    yarn
    # or
    yarn install
    ```
    - 安装、升级、移除依赖包
    ```
    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]

    // 同样的 upgrage (升级) remove(移除)
    ```
    - 将依赖添加开发依赖中 devDependencies
    ```

    yarn add [package] --dev  // 默认不加参数  是安装到生产依赖中

    sudo yarn global add nodemon // 全局安装  // 尽量不要使用

    // 安装依赖有许多选项，包括：
    // 安装所有依赖：yarn 或 yarn install
    // 安装一个包的单一版本：yarn install --flat
    // 强制重新下载所有包：yarn install --force
    // 只安装生产环境依赖：yarn install --production

    ```
+ 注意事项
    - 尽量不要使用 yarn 安装全局包 yarn对于node_module中依赖包的处理和npm与cnpm不同,所以如果使用yarn 全局安装包,很有可能导致其他全局命令的不能使用
    

