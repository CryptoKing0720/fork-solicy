const mongoose = require('mongoose')

const blockSchema = new mongoose.Schema({
    data:{
        type:String
    },
    hash:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true,
        trim:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Block',blockSchema)