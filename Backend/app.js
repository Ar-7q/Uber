const dotenv=require('dotenv')
dotenv.config()
const exp =require('express')
const cors = require('cors')
const app = exp()




app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello Arpit')
})
module.exports=app
