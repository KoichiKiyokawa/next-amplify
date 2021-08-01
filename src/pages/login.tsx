import { useCallback } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = useCallback((data: FormData) => {
    alert(JSON.stringify(data))
  }, [])

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded max-w-[640px] m-auto p-4"
      >
        <label>
          <span className="block">email</span>
          <input
            type="email"
            autoComplete="current-password"
            {...register("email")}
          />
        </label>

        <label>
          <span className="block">password</span>
          <input type="password" {...register("password")} />
        </label>

        <div className="flex items-center space-x-4 mt-4 justify-end">
          <button className="text-white bg-blue-400 p-2 rounded">Login</button>
          <span>
            or{" "}
            <span className="text-blue-500">
              <Link href="/signup" passHref>
                Sign Up
              </Link>
            </span>
          </span>
        </div>
      </form>

      <style jsx>{`
        form > label + label {
          @apply block mt-4;
        }
        input {
          @apply block border w-full px-1 py-1.5 mt-2;
        }
      `}</style>
    </>
  )
}

export default Login
