# Git 使用总结

## 1. Git 初始化
- 查看git配置
```js
git config --list 
```
- 配置使用git仓库的人员姓名和 email
```
git config --global user.name 'Jay'
git config --global user.email 'jay@126.com'
```

## 2. Github Gitlab SSH 公钥来进行授权
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

## 3. 常用Git命令
+ 创建 tag: git tag v1.1.3 (git tag -a v1.1.2 -m "我是备注")

+ 查看分支：git branch

+ 创建分支：git branch <name>

+ 切换分支：git checkout <name>

+ 创建+切换分支：git checkout -b <name>

+ 合并某分支到当前分支：git merge <name>  

+ 抓取(更新本地的 远端分支): git fetch origin dev

+ 撤销提交: git reset --hard 10bb4

+ 抓取: git fetch 相当于是从远程获取最新的版本到本地, 不会自动 merge

+ 删除分支：git branch -d <name> 注意:删除当前分支 需要切换到其他分支   如果要删除的分支没有和当前的分支合并 会提示的 删除失败  真要删除 用 -D

+ 下载最后一次提交   git clone XXXX --depth=1

## 4. 关于 merger 的操作

+ 一般操作开发分支 (dev) 上的代码达到上线的标准后, 要 merge 到 master 分支

```js
git checkout dev
git pull
git checkout master
git merge dev
git push -u origin master
```
+ 遇到冲突  
```js
git checkout dev
git pull
git checkout master
git merge dev
// 遇到冲突  要解决冲突
git add .
git commit -m "...."  // 或者使用  git merge --continue
git push -u origin master
```

## 关于 rebase
- 使用场景 
    - 你昨天从master 上切出来的 dev 一直在开发
    - 今天你发现 master 分支 别人有新的提交了 
        - 这些代码你不用对你没有影响 忽略就行 只管在 dev 开发就行
        - 别人的 代码 你想用 或者对你有影响  这时就可以优雅的使用 rebase
        ```js
        git rebase master
        ```
        - 或者使用 (更加细粒度的 rebse) (如果 master 别人提交了5次  你只想合并他的钱三次 提交)
        ```js
        // git rebase   [startpoint](不包含)  [endpoint](包含)  --onto  [branchName]

        git  rebase   90bc0045b^   5de0da9f2   --onto master  // 区间为前开 后闭 (]

        ```
- 遇到冲突  和 merge 的解决方法一样

## 关于 stash 暂存 
- 使用场景
    - 你正在你的分支开发 有人让你切其他分支  此时你又不想 git add.  git commit 你就可以 使用 git stash   暂存一下
    - 暂存后 就 切分支 做其他事情了 等做完了  在回到你的 dev 分支 恢复一下  就 和暂存前一样了  git pop
- 常用指令
    - git stash save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。
    ```
    git stash 
    or git stash save '我是备注标示'
    ```

    - git stash list  ：查看stash了哪些存储

    - git stash show ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}

    - git stash show -p : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p

    - git stash apply :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} 
    ```
    git stash apply stash@{0} // 最新的
    git stash apply stash@{1}
    git stash apply stash@{2}

    // 也可以使用功能

    git stash apply 0
    git stash apply 1
    git stash apply 2
    ```

    - git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}
    ```
    git stash pop stash@{0} // 最新的
    git stash pop stash@{1}
    git stash pop stash@{2}

    // 也可以使用功能

    git stash pop 1
    git stash pop 2
    git stash pop 0
    ```

    - git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储

    - git stash clear ：删除所有缓存的stash

- 特别注意
    - 新增的文件 直接 stash 是不生效的  但是 新增的文件也不影响你切分支  只是切分支后不要吧 新文件也提交了 就好
    - 因为 新加的文件 不在 git 的版本控制里  要想 也 stash   要先执行 一下  git add .

    - 需要注意  git  add  和  git  stash  没有必然的关系

## 各种重置操作
- 撤回 git add 操作  其实就是操作 HEAD
```js
git status // 此时看的 add 后的文件都变绿了 此时修改的文件 在 暂存区
git reset HEAD // 这样就清除了所有add过的内容
git status // 此时看到修改的文件 都变红了  说明此时修改的文件 在 工作区

// 当然 如果只是想撤回某个文件 可以 后边加上路径就可以 
git status HEAD src/components/Dict/resource/basicsStatus.js
```
- 撤回 commit 
```
git reset HEAD^ // 撤回了 commit  和 add   就是把修改的内容 撤回到 工作区了
git reset HEAD^ --hard // 撤回了 commit  和 add   就是把修改的内容 撤回到 工作区了
git reset HEAD^ // 撤回了 commit  和 add   就是把修改的内容 撤回到 工作区了

```
- 回退版本 

    - 1. 首先使用git log查看最近几次提交的版本号，"0250cd0ff958edsadasasd";

    - 2. 在命令行输入 
    ```js
    git reset --hard 0250cd0ff95
    ```
    - 3. 回退后强制推向远端
    ```js
    git push -f -u origin dev
    ```

    - 4. 如果 回滚的 没有提交到远端仓库  就不需要第3步

    - 5. 通知其他开发人员
    ```sh
         # 从远程仓库下载最新版本
        git fetch --all 
        # 将本地设为刚获取的最新的内容
        git reset --hard origin/master
    ```

- 撤回 merge

    - 方法一 直接 回退到 merge 之前的版本
    - 方法二 当 merge 以后还有别的操作和改动时，git 正好也有办法能撤销 merge，用 git revert：

- 1. 还没有进行 add . 和 commit 操作:

### Git 清空工作区和暂存区
- 还没有进行 add . 和 commit 操作:  git checkout .
- 已经 add : git reset .
- 清除新建的文件 文件夹: git clean -d -f



