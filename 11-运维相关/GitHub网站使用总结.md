## 概述
- GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub
- 2018 年 6 月 4 日，微软宣布，通过 75 亿美元的股票交易收购代码托管平台 GitHub。
## 遭到攻击
- 2013年1月15日晚间，GitHub突然疑似遭遇DDOS攻击，访问大幅放缓，该网站管理员经过日志查询，发现是来自12306的抢票插件用户洪水般的访问导致GitHub出现问题。
- 2019年5月，《个人电脑杂志》网站报道，GitHub正遭到一名黑客的入侵。据称，这名黑客先擦除代码资源库，然后向用户索要赎金，作为恢复数据的交换。 
## 1. github 中的 watch、star、fork的作用
### 1.1 watch
- watch翻译过来可以称之为观察，点击watch可以看到如下的列表。
- 默认每一个用户都是处于Not watching的状态，当你选择Watching，表示你以后会关注这个项目的所有动态，以后只要这个项目发生变动，如被别人提交了pull request、被别人发起了issue等等情况，
- 你都会在自己的个人通知中心，收到一条通知消息，如果你设置了个人邮箱，那么你的邮箱也可能收到相应的邮件
- 如果你不想接受这些通知，那么点击 Not Watching 即可。
- 另外这里有一篇文章讲 如何[正确接收 GitHub 的消息邮件](https://github.com/cssmagic/blog/issues/49)，很不错的一篇文章，推荐大家看看。

### 1.2 star
- star 翻译过来应该是星星，但是这个翻译没任何具体意义，这里解释为`关注`或者`点赞`更合适，当你点击 star,表示你喜欢这个项目或者通俗点，可以把他理解成朋友圈的点赞吧，表示对这个项目的支持。
- 不过相比朋友圈的点赞，github 里面会有一个列表，专门收集了你所有 start 过的项目，
- 点击 github 个人头像，可以看到 your star的条目，点击就可以查看你 star 过的所有项目了。如下图

### 1.3 fork
- 当选择 fork，相当于你自己有了一份原项目的拷贝，当然这个拷贝只是针对当时的项目文件，如果后续原项目文件发生改变，你必须通过其他的方式去同步。
- 同时 epository(仓库)列表下查看 fork 的项目了。其实你完全可以使用 star 来达到这个目的。

### 1.4 使用建议
- 1. 对于一些可能会经常发生变化的会不定期更新的好项目 多使用 watch 只要项目新增一些好玩好用的东西，你就会收到通知。
- 2. 喜欢一个项目就 star 它
- 3. 修改开源项目就使用 fork，这样你就可以在原项目的基础上，对项目进行修改提交，现在你是这个项目的主人

## 2. 在 GitHub.com 上编辑代码
- 当你在 GitHub 中查看文件（任何文本文件、任何仓库）时，右上角都会呈现一个铅笔图标。 点击它即可编辑该文件。 编辑完成之后，点击“Propose file change”按钮，GitHub 将为你 fork 代码仓库并发起 pull request。
- 不需要自己手动将代码 fork 到本地，然后进行 pull、修改、push、pull request 等一系列操作。
### 3. 格式化代码
- 如果你想编写代码块，你可以从三个反引号开始
```js
```jsx
```js
```

## 3. SSH 公钥来进行授权
- Mac 
    - 先查看是否存在
    ```sh
    $ cd ~/.ssh
    $ ls
    id_rsa		id_rsa.pub(公钥贴到github)

    cat ~/.ssh/id_rsa.pub
    ```
    - 如果没有 创建 SSH Key
    ```sh
    $ ssh-keygen -t rsa -C "youremail@example.com"
    ```
    - 测试是否成功
    ```sh
    ssh -T git@github.com

    # (成功了) Hi var-chx! You've successfully authenticated, but GitHub does not provide shell access.
    # (失败了) Permission denied (publickey)....
    ```
- win 10
    - 先看是否存在
    ```sh
    C:\Users\XXX\.ssh
    ```
    - 没有 和 Mac 一样

## 4. 进入项目后 里边的格局要一步步点击进去  可以使用快捷 t 展开 所有项
- 使用谷歌插件 
    - Octotree - GitHub code tree






## 参考
+ [如何高效利用GitHub](https://www.yangzhiping.com/tech/github.html)