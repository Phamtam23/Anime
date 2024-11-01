const express=require("express");
const { routerAPI } = require("./src/router/api");
const app=express()
const port=process.env.BACKEND_PORT||6005
app.use(express.json());

app.use('/api/anime',routerAPI)
app.listen(port,()=>{
    console.log(`Backend run port ${port}`)
})
