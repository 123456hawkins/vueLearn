// import axios from "axios";
// ctrl+单击进入声明文件

// express就没有声明文件
import express from 'express'

const app=express()
const router=express.Router()
app.use('/api',router)
router.get('/api',(req,res)=>{
  res.json({
    code:200
  })
})
app.listen(9001,()=>{
  console.log('9001');
  
})