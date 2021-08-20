### Mac 操作技巧
1. command + ~  相同程序之间的切换
2. command + H 隐藏当前窗口
3. ctrl + common + Q 锁屏
4. 显示隐藏的文件   shift commond + .
5. 空格  预览
6. 访达中 shift + command + G 显示出路径  

### 命令行 操作技巧
1. 查看git 公钥 cat ~/.ssh/id_rsa.pub
2. 没有权限的命令行 可加  sudo
3. Cd ~ 可以切到 用户根目录
4. Cd / 系统根目录
5. hosts 文件位置  /etc/hosts 可以用vi 编辑

### mac  删除默认输入法
- 前置条件 禁用 SIP 保护机制的步骤
    - 重启系统，按住 Command + R 进入恢复模式。

    - 点击顶部菜单栏 实用工具 中的 终端 。

    - 输入以下命令来禁用 SIP 保护机制。
    ```sh
    csrutil disable
    ```
    - 执行后输出以下信息表示禁用成功。
    ```sh
    Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect.
    ```
    - 然后再次重启系统即可。
    - 想打开 
    ```sh
    csrutil enable
    ```
- 安装 PlistEdit Pro  (安装包 在 百度网盘/MYTool/mac/PlistEditPro.zip) (https://www.fatcatsoftware.com/plisteditpro/)
- 用 PListEdit Pro 打开 sudo open ~/Library/Preferences/com.apple.HIToolbox.plist
- 依次点开 Root - AppleEnabledInputSources ，会看到一列 item ，找到其中 KeyboardLayout Name 为 ABC 的那一列，将整列 item 删掉，然后 command + S 保存。
- 接着重启电脑

