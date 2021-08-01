import { User } from "@prisma/client"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { useForm } from "react-hook-form"

type FormData = User

export const UserNew = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const router = useRouter()

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) return alert("error")

    router.push("/users")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        name: <input {...register("name")} />
      </label>

      <label>
        email: <input type="email" {...register("email")} />
      </label>

      <button className="bg-red-500 text-white p-2 mt-4">create</button>

      <style jsx>{`
        label {
          @apply block;
        }
        label + label {
          @apply mt-4;
        }
        input {
          @apply border;
        }
      `}</style>
    </form>
  )
}

export default React.memo(UserNew)
