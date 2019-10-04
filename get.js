const url = require('url')

let str = 'http://www.baidu.com/abc?flag=123&key=zz'
let ret = url.parse(str,true)
console.log(ret)
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?flag=123&key=zz',
//   query: 'flag=123&key=zz',
//   query: [Object: null prototype] { flag: '123', key: 'zz' },//true
//   pathname: '/abc',
//   path: '/abc?flag=123&key=zz',
//   href: 'http://www.baidu.com/abc?flag=123&key=zz' 
// }

console.log(url.format(ret))