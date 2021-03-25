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