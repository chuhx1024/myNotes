// 实现这个项目的构建任务
const { src, dest, parallel, series } = require('gulp')
const del = require('del')

const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()

const sass = require('gulp-sass')(require('sass'))
// const babel = require('gulp-babel')
// const swig = require('gulp-swig')

const style = () => {
    return src('src/assets/styles/*.scss', { base: 'src' })
        .pipe(sass())
        .pipe(dest('dist'))
}

const script = () => {
    return src('src/assets/scripts/*.js', { base: 'src' })
        .pipe(plugins.babel({ presets: ['@babel/preset-env']}))
        .pipe(dest('dist'))
}
const page = () => {
    return src('src/**/*.html', { base: 'src' })
        .pipe(plugins.swig())
        .pipe(dest('dist'))
}

// module.exports = {
//     style,
//     script,
//     page
// }
const clean = () => {
    return del(['dist'])
}

const compile = parallel(style, script, page)

const build = series(clean, compile)

exports.default = build

