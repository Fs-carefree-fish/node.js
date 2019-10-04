const querystring = require('querystring')
const http = require('http')

// let param = 'username=li&password=1233'
// let obj = querystring.parse(param)
// console.log(obj)
// //[Object: null prototype] { username: 'li', password: '1233' }

// var obj2 =  { username: 'li', password: '1233',arr:['1','2'] }
// console.log(querystring.stringify(obj2))
//username=li&password=1233&arr=1&arr=2

http.createServer((req,res) => {
  if(req.url.startsWith('/login')){

    let postdata = ''

    req.on('data',(chunk) => {
      postdata += chunk
    })

    req.on('end',() => {
      console.log(postdata)
      let obj = querystring.parse(postdata)
      res.end(obj.username+'====='+obj.password)
    })
  }
}).listen(3000,()=>{
  console.log("running")
})

