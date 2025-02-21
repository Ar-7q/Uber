const mongoose =require('mongoose');
const blacklisttokenschema=new mongoose.Schema({
    token:{
        type:String,
        require:true,
        unique:true
    },createdat:{
        type:Date,
        default:Date.now,
        expires:86400 //expires in 24 hr
    }
})

module.exports=mongoose.model('Blacklisttoken',blacklisttokenschema)