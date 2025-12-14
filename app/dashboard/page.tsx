"use client";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
   const [users, setUsers] = useState([]);
  
useEffect(() => {
    api.get("/users", { withCredentials: true })
      .then(res => setUsers(res.data.users))
      .catch(err => console.log(err));
  }, []);

  return (
   <div className="flex flex-col sm:mt-32 mt-20  justify-center items-center font-serif space-y-6">
      <h1 className="text-2xl font-semibold text-purple-700 max-[450]:text-xl [text-shadow:_-1px_-2px_0_green,_1px_-1px_0_red,_-2px_1px_0_pink,_1px_1px_0_green]">Welcome to Dashboard</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Page