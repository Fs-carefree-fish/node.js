// 处理二进制的一个接口
// 实例化

// let buf = Buffer.alloc(5)
// console.log(buf)

// let buf = Buffer.from("hello")
// console.log(buf)
// console.log(buf.toString())

//let wbuf = Buffer.alloc(5)
//wbuf.write('ahhahahahah',2,1)//从哪里写入 //写入多少字节
let buf = Buffer.from("我",'utf8')//指定编码
let buf2 = Buffer.from("爱你",'utf8')
let buf3 = Buffer.concat([buf,buf2])
// wbuf.write("我")
//wbuf.write('a')
//console.log(Buffer.byteLength(buf))
console.log(buf3.toString())