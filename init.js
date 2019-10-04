const path = require('path')
const fs = require('fs')

let root = 'C:\\Users\\张铮\\Desktop'
let fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div>welcome!</div>
</body>
</html>`

let initData = {
  projectName: 'demo',
  data: [
    {
      name: 'img',
      type: "dir"
    },
    {
      name: 'css',
      type: "dir"
    },
    {
      name: 'js',
      type: "dir"
    },
    {
      name: 'index.html',
      type: "file"
    },
  ]
}

//创建根目录
fs.mkdir(path.join(root, initData.projectName), (err) => {
  if (err) return;
  //创建子目录和文件
  initData.data.forEach((item) => {
    if (item.type === 'dir') {
      fs.mkdirSync(path.join(root, initData.projectName, item.name))
    } else if (item.type === 'file') {
      fs.writeFileSync(path.join(root, initData.projectName, item.name),
        fileContent)
    }
  })
})

