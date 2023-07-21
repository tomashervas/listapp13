'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

type UserProps = {
    user: User
}

type User = {
    id: number
    first_name: string
    email: string
    avatar: string
}

const User: React.FC<UserProps> = ({user}) => {
    const router = useRouter()
  return (
    <div key={user.id} className="flex items-center p-4 m-4 border-2 rounded-lg bg-slate-50 w-full md:w-3/4 lg:w-1/2 cursor-pointer" onClick={() => router.push(`/users/${user.id}`)}>
          <p className="w-10 mr-4">{user.id}</p>
          <p className="w-1/4 mr-4">{user.first_name}</p>
          <p className="mr-4 flex-1">{user.email}</p>
          <Image src={user.avatar} width={75} height={75} alt="user avatar" className="rounded-full" priority></Image>
    </div>
  )
}
export default User