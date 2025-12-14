"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter, usePathname } from "next/navigation";
import api from "@/lib/axios";

const Navbar =  () => {

  const router = useRouter();
  const pathname = usePathname();

 const handleLogout = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
      alert("Logged out successfully");
      router.push("/login");
      router.refresh();  // middleware refresh
    } catch (error) {
      alert("Logout failed");
      console.error("Logout failed", error);
    }
  };

 const isDashboard = pathname.startsWith("/dashboard");


  return (
    <div className="px-4 md:px-6 max-[370]:px-1  flex items-center justify-between">
      

      
      <div className="flex items-center gap-1 max-[370]:gap-1">
        <Image
          src="/signature_tech_logo.png"
          alt="Logo"
          width={90}
          height={90}
          priority
          className="cursor-pointer"
        />
        <span className="text-lg max-[370]:text-sm md:text-xl  mt-6 cursor-pointer text-purple-800 font-semibold">
          SignatureTech
        </span>
      </div>


     {isDashboard && <Button
        className="bg-gradient-to-r from-blue-500 to-purple-500 mt-6
                   hover:from-blue-600 hover:to-purple-600
                   transition-all duration-300 cursor-pointer"
                  
      onClick={handleLogout}>
        LogOut
      </Button> }

    </div>
  )
}

export default Navbar
