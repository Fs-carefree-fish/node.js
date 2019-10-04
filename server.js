const http = require('http')
const fs = require('fs')
const path = require('path')
// //创建对象
// let server = http.createServer()

// //绑定事件
// server.on('request',(req,res) => {
//   res.end('hello')
// })

// //监听端口
// server.listen(3000)

//========================================================================================
// //读取相应文件

// let readFile = (url, res) => {
//   fs.readFile(path.join(__dirname, 'www', url), 'utf8', (err, fileContent) => {
//     if (err) {
//       res.end("server error")
//     } else {
//       res.end(fileContent)
//     }
//   })
// }


// // req是实例对象
// // res也是实例对象

// http.createServer((req, res) => {

//   if (req.url.startsWith('/index')) {

//     readFile('index.html',res)

//   } else if (req.url.startsWith('/about')) {

//     readFile('about.html',res)

//   } else {

//     res.writeHead(200, {
//       'Content-Type': 'text/plain; charset=utf-8'
//     })
//     res.end("页面不见辽~")
//   }

// }).listen(3000, () => {
//   console.log("server running...")
// })

//==========================================================================
http.createServer((req,res) => {
  fs.readFile(path.join(__dirname,'www',req.url),'utf8',(err,fileContent) => {
    if(err){
      res.writeHead(404,{
        "Content-Type":"text/plain; charset=utf8"
      })
      res.end("页面丢失了。。。")
    }else{
      res.end(fileContent)
    }
  })
}).listen(3000,()=>{
  console.log("server running...")
})