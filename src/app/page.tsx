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
    <main className="flex flex-col h-screen justify-center items-center bg-slate-200">
      <h1 className="text-3xl">Home page</h1>
      {users.data.map((user:any) => (
        <User key={user.id} user={user} />
      ))}
    </main>
  )
}
