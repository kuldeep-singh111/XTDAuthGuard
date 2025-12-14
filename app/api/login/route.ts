import { NextResponse } from "next/server";
import { ConnectToDB } from "@/lib/db";
import { AdminUser } from "@/models/AdminUser";
import { generateToken } from "@/lib/auth";



export async function POST(req: Request){
    try{

        await ConnectToDB();
        const {username, email, password} = await req.json();

        if(!username || !email || !password){
            return NextResponse.json({success: false, message: "All fields are required"}, {status: 400});
    }

    const User = await AdminUser.create({
        username,
        email,
        password
    });

    const token = generateToken({ 
        id: User._id,
        email: User.email,
     });


     const response = NextResponse.json({success: true, message: "Login Successful"}, {status: 200});

     response.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 30*60,  // 30 mint
     });

     return response;
    }catch(err:any){
        console.log("Login error", err);
        return NextResponse.json({success: false, message: err.message}, {status: 500});

    
}}

