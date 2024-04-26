const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        required: true,
        type: String,
        trim: true
    }
})

userSchema.virtual('blocks',{
    ref : 'Block',
    localField:'_id',
    foreignField:'user'
})


userSchema.statics.checkCredentials = async(name,password)=>{
    const user = await User.findOne({name})

    if(!user){
        throw new Error('Unable to login')
    }

    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
        throw new Error("Credentials are not valid")
    }

    return user;
}

userSchema.pre('save',async function(next){
    const user =  this;
    if(user.isModified('password')){
        const hashedPassword = await bcrypt.hash(user.password,8)
        user.password = hashedPassword
    }
    next()
})

const User = mongoose.model('User',userSchema);
module.exports = User;
