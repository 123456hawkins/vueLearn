const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const port = 3000

// 配置文件上传目录和文件名
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

app.use(cors())
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))

app.post('/upload', upload.single('file'), (req, res) => {
  // 检查是否有错误发生
  if (req.fileValidationError) {
    return res.status(400).send({ error: req.fileValidationError })
  }

  // 检查是否成功上传文件
  if (!req.file) {
    return res.status(400).send({ error: '未选择文件上传。' })
  }

  console.log('文件上传完成')
  res.status(200).send({ msg: 'success' })
})

app.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`)
})
