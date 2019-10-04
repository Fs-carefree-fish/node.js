function foo() {
  //console.log(this.num)

  setTimeout(() => {
    console.log(this.num)
  }, 1000)
  //1

  setTimeout(function () {
    console.log(this.num)
  }, 3000)
  //undefined

}

foo.call({ num: 1 })

//1、this是定义时候绑定的
//2、不可以new
//3、不可以arguments 用rest

// let fn = ()=>{
//   console.log(arguments)//得不到
// }
// fn(1,2)

// let fn = (...params) => {
//   console.log(params)//[ 1, 2 ]
// } 
// fn(1, 2)