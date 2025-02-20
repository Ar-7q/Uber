const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const userschema = new mongoose.Schema({

    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'firstname should have minimum 3 character']
        },
        lastname:{
            type:String,
            minlength:[3,'last name minimum has 3 character']

        }
        
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:[5,'email must have 5 character']

    },password:{
        type:String,
        require:true,
        select:false
    },
    socketId:{
        type:String
    }
})

userschema.methods.generateAuthToken= function(){
    const token =jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userschema.methods.comparepassword =async function(password){
    return await bcrypt.compare(password,this.password);
}

userschema.statics.hashpassword =async function(password){
    return await  bcrypt.hash(password,10);

}
const userModel = mongoose.model('user',userschema);
module.exports=userModel