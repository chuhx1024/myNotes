module.exports = {
  env: { // 标记代码的运行环境  检测某些变量是否可以 (window, docoment)
    browser: true,
    es2021: true
  },
  extends: [ // 共享的配置
    'standard'
  ],
  parserOptions: { // 可以使用的JS版本
    ecmaVersion: 12
  },
  rules: { // 自定义的规则
  },
  globals: { // 可以添加些全局变量 不会报错
    jQuery: 'readonly'
  }
}
