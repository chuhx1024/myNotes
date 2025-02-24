Win 10
```js
{
    "editor.mouseWheelZoom": true, //可以按着ctrl 加滚轮 缩放窗口字体大小
    "workbench.colorTheme": "Monokai Dimmed",
    "editor.wordWrap": "on", //软换行
    "explorer.openEditors.visible": 1,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.renderLineHighlight": "gutter", // 在“打开的编辑器”窗格中显示的编辑器数量。
    // eslint相关 start--------
    "editor.formatOnSave": false, // 必须关闭vs code 的默认保存格式化
    "editor.codeActionsOnSave": { 
        "source.fixAll.eslint": true  // 用项目的eslint规则 格式化代码
    },
    "eslint.validate": [
        "javascript",
        "vue",
        "html",
        "css",
        "jsx",
        "js"
    ],
    "vetur.format.defaultFormatter.html": "none",
    "vetur.format.defaultFormatter.js": "none",
    "vetur.format.options.tabSize": 4,
    // eslint相关结束 end------
    "workbench.iconTheme": "material-icon-theme",
    "writeCnblog.blogId": "406125",
    "writeCnblog.rpcUrl": " https://rpc.cnblogs.com/metaweblog/var-chu",
    "writeCnblog.userName": "chuhx",
    "writeCnblog.blogWorkspace": "/Users/hxchu/workSpace/cnblogs",
    "git.enableSmartCommit": true,
    "extensions.ignoreRecommendations": false,
    "editor.tabSize": 4,
    "cssrem.rootFontSize": 80,
    "editor.detectIndentation": false,
    "projectManager.sortList": "Path",
    "gitProjectManager.baseProjectsFolders": [
        
    ],
    "window.zoomLevel": 1, // px to rem & rpx(cssrem): px 转 rem  80px --> 1rem; 
}
```

## win 10 快捷键
```js
// 将键绑定放在此文件中以覆盖默认值auto[]
// 将键绑定放在此文件中以覆盖默认值auto[]
[
  {
    "key": "ctrl+alt+f",
    "command": "editor.action.startFindReplaceAction"
  },
  {
    "key": "ctrl+d",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+enter",
    "command": "editor.action.insertLineAfter",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+k ctrl+s",
    "command": "workbench.action.files.save"
  },
  {
    "key": "ctrl+s",
    "command": "-workbench.action.files.save"
  },
  {
    "key": "ctrl+s",
    "command": "saveAll"
  },
  {
    "key": "ctrl+k s",
    "command": "-saveAll"
  }
]

```

## mac 快捷键
```js
[
    {
        "key": "alt+cmd+s",
        "command": "workbench.action.files.save"
    },
    {
        "key": "cmd+s",
        "command": "-workbench.action.files.save"
    },
    {
        "key": "cmd+s",
        "command": "workbench.action.files.saveAll"
    },
    {
        "key": "alt+cmd+s",
        "command": "-workbench.action.files.saveAll"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "cmd+d",
        "command": "-editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "cmd+d",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "cmd+enter",
        "command": "-editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    }
]
```