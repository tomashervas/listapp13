import Image from "next/image"

type UserPageProps = {
  params: {
    id: string
  }
}

const fetchUser = async (id: string) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data
}

const UsersPage = async ({params} : UserPageProps) => {

  const {data} = await fetchUser(params.id)
  
  return (
    <div className="p-8">
        <h1 className="text-3xl p-4">User details</h1>
        <div className="flex justify-between items-center border-2 rounded-lg border-slate-300 p-4 w-1/2">
          <div className="">
            <p>id: {params.id}</p>
            <p>Email: {data.email}</p>
            <p>Name: {data.first_name}</p>
            <p>Lastname: {data.last_name}</p>
          </div>
          <div className=" border-2 border-solid rounded-lg shadow-lg shadow-slate-400">
            <Image src={data.avatar} width={200} height={200} alt="user avatar"/>
          </div>
        </div>

    </div>
  )
}
export default UsersPage