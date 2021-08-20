import json from 'rollup-plugin-json'
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        json() // 这里不用 new 了
    ]
}