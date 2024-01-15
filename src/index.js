const server = require("./app")
require("dotenv").config()

server.listen(process.env.PORT,process.env.HOST,()=>{
    console.log(`server started http://${process.env.HOST}:${process.env.PORT}`)
})