const fs = require('fs')
const path = require('path')

//Sync是同步操作
//fs.stat("./abc",(err,stat) => {
// fs.stat("./test.txt", (err, stat) => {
//   if (err) return
//   if (stat.isFile()) {
//     console.log("文件")
//     // stat.atime
//     // stat.mtime
//     // stat.ctime//权限等被改变的时间
//     // stat.birthtime
//   } else if (stat.isDirectory()) {
//     console.log("目录")
//   }
// })

//fs.readFile('./test.txt','utf8',(err,data) => {
// fs.readFile('./test.txt',(err,data) => {
//   if (err) return
//   console.log(data)
//   console.log(data.toString())
// })

// console.log(1)

let apath = path.join(__dirname,'test.txt')
fs.writeFile(apath,"ffff",(err)=>{
  console.log(err)
})



//大文件的流式操作
//基于事件处理


// let spath = path.join('C:\\Users\\张铮\\Desktop\\react', '源码.zip')
// let dpath = path.join('C:\\Users\\张铮\\Desktop\\file', '源码拷贝.zip')

// let readStream = fs.createReadStream(spath)
// let writeStream = fs.createWriteStream(dpath)

// let num = 0
// readStream.on('data',(chunk) => {
//   num++
//   writeStream.write(chunk)
// })

// readStream.on('end',() => {
//   console.log("文件加载完成" + num)
// })

// readStream.pipe(writeStream)

//创建目录


// fs.mkdir(path.join(__dirname,'./cda'),(err) => {
//   console.log(err)
// })

// fs.mkdirSync(path.join(__dirname,'./hhhhh'),(err) => {
//   console.log(err)
// }) 

//读取目录
// fs.readdir(__dirname, (err, files) => {
//   files.forEach((item, key) => {
//     fs.stat(path.join(__dirname, item), (err, stat) => {
//       if (stat.isFile()) {
//         console.log('文件')
//       } else if (stat.isDirectory()) {
//         console.log("目录")
//       }
//     })
//   })
// })

// //删除目录
// fs.rmdir(path.join(__dirname,'hhhhh'), (err) => {
//   console.log(err)
// })

