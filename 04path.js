const path = require('path')

// console.log(path.basename('/foo/buu/index.html'))
// console.log(path.basename('/foo/buu/index.html','.html'))

// console.log(__dirname)
// console.log(path.dirname('abc/ab/a/aaa'))

// let obj = path.parse(__filename)
// //console.log(obj)

// let aobj = {
//   root: 'D:\\',
//   dir: 'D:\\web\\program\\node.js',
//   base: '04path.js',
//   ext: '.js',
//   name: '04path'
// }
// console.log(path.format(aobj))

// path.isAbsolute()//是否绝对路径
// path.join()//拼接路径
// path.normalize()//格式化路径
// path.relative()//计算相对路径
// path.resolve()//解析路径

//特殊的 linux与windows不同
console.log(path.delimiter)// ';'':'
console.log(path.sep)//'/''\'
