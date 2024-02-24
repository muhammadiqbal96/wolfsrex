import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    refral_code:{
        type: Number,
        unique:false,
        required: true
    },
    username:{
        type: String,
        unique:true,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required: true
    },
    mobile_number:{
        type: Number,
        unique:true,
        required: true
    },
    password:{
        type: String,
        unique:false,
        required: true
    },
})

export const User = mongoose.models.Users || mongoose.model('Users',userSchema)