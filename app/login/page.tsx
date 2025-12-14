"use client"
import React, {useState} from 'react'
import { 
    Card,
    CardContent,
    CardFooter, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import api from "@/lib/axios";
import { useRouter } from "next/navigation";



const Page = () => {

  const [AdminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try{
   await api.post("/login", AdminData, {
        withCredentials: true,
      });
      alert("Login Successful");
      router.push("/dashboard");
    }
    catch (err: any) {
      alert(err.response?.data?.message || "something went wrong");
      setError(err.response?.data?.message || "something went wrong");
      
    }
  }

  return (
    <div className="min-h-screen w-full flex font-serif items-center justify-center ">
     <Card className="w-full max-w-md mx-4 ">
       <CardHeader>
        <CardTitle className=''> <span className='text-purple-800'>LOGIN</span>  to your account</CardTitle>
        <p className="text-sm text-muted-foreground ">Enter your email below to login to your account</p>
        </CardHeader>

        <CardContent className="space-y-2">
            <p className=' text-muted-foreground' >Username</p>
        <Input type='name' onChange={(e) => setAdminData({...AdminData, username: e.target.value})} required placeholder='Prem' className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
         <p className=' text-muted-foreground' >Email</p>
        <Input  type='email' onChange={(e) => setAdminData({...AdminData, email: e.target.value})} required placeholder='prem@example.com' className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
        <p className=' text-muted-foreground' >Password</p>
        <Input type='password' onChange={(e) => setAdminData({...AdminData, password: e.target.value})} required placeholder='••••••••' className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
        </CardContent>

        <CardFooter>
            <Button className='w-full bg-gradient-to-r from-blue-500 to-purple-500
             hover:from-blue-600 hover:to-purple-600
             transition-all duration-300 cursor-pointer' onClick={handleLogin}>Login</Button>
        </CardFooter>

     </Card>

    </div>
  )
}

export default Page