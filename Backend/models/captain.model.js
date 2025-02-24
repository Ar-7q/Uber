const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainschema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'first name should be more than 3'],
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname must be stleast 3 character']

        }
    }, email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'please enter valid email']


    }, password: {
        type: String,
        required: true,
        selct: false
    }, socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehichle: {
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 charcter']
        },
        plate:{
            type:String,
            required:true,
            min:[3,'plate must be atleast 3 charcter']
        },capacity:{
            type:Number,
            required:true,
            min:[1,'capacity atleast 1']

        },vehichletype:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        }

    },
    location:{
        ltd:{
            type:Number,
        },
        lng:{
            type:Number
        }
    }


})

captainschema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token
}

captainschema.methods.comparePassword=async function (password) {
    return await bcrypt.compare(password,this.password);
    
}
captainschema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10);
}
const captainModel= mongoose.model('captain',captainschema)

module.exports=captainModel;