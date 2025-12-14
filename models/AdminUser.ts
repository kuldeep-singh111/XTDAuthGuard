import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
    {
  
    username: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        trim:true,
    },
    password:{
        type: String,
        required: true
    },
},
    { timestamps: true }
);


export const AdminUser = mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
