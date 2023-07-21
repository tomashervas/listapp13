import User from "@/components/User"
import Image from "next/image"

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users?page=1')
  const data = await res.json()
  return data
}


export default async function Home() {

  const users = await fetchUsers()

  return (
    <div className="p-8 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">List app 13</h1>
      {users.data.map((user:any) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}
