### Linux 基础知识
1. 通过软件来模拟具有完整硬件系统功能的 运行一个完全隔离环境中的完整计算机系统
2. 常用的linux 命令
    1. touch a.js  创建文件  如果已经存在 就修改末次修改时间
    2. rm a.js 删除文件  rm -r ccc 删除文件夹 删除以后不能恢复 -f 强制删除
    3. pwd 显示当前路径
    4. mkdir ccc 创建文件夹  -p 可以递归创建  mkdir -p a/b/c/d   同一个目录下文件了文件夹不能重名
    5. cp mv 拷贝和移动文件
    6. ls 
        -a 显示所有文件 包含隐藏文件  
        -l 可以显示详情  
        也可以组合 使用 ls -a -l  或者 ls -al
        关于通配符  * 代表所有  ls #.txt   匹配任何.txt 文件
                  ? 代表一个   ls ?.txt  只能匹配到  1.txt 2.txt 等
    7. 关于 cd
        cd ~ 回家
        cd  也可以回家
        cd .
        cd .. 上级
        cd -  可以在上两次目录直接切换
    8. cp 复制  cp 源文件  目标文件 加-i 会提示 是否覆盖 -r 可以复制文件夹 包含下边的所有文件
    9. mv 移动
    10. cat 查看文件  显示全了 
    11. more  分屏查看 按空格下一页 enter 下一行  b回滚一屏 f下一屏 q 退出
    12. echo 
    13. 命令 后跟  > demo.js  可以把本来要显示在终端的信息 写入demo.js 追加 >>
    14. 管道 | 
        - Linux 允许将一个命名的输出 通过管道 作为 另一个命令的输入
        - 常用的命令 more 分屏 grep  在执行结果的基础上查询指定的文本
    15. 关机  shutdown -r 重启
    16. 查看网卡信息  ifconfig | grep inet
    17. scp  远程拷贝文件:
        - 上传视频的方式 scp xxx.mp4 work@35.194.205.82:/home/work/site/video/
    18. 查看 终端命令的位置
        - which npm  // /usr/local/bin/npm
        - which python  // /usr/bin/python





    


