import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import Modal, { useModal } from "../domains/core/components/Modal"
import React from "react"

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data))
  }

  const [count, setCount] = useState(0)
  const { isShowing, show, hide } = useModal()

  return (
    <>
      <Modal show={isShowing} onClose={hide}>
        <p>delete ?</p>
        <button onClick={hide}>cancel</button>
        <button onClick={() => alert("ok")} className="ml-4">
          ok
        </button>
      </Modal>

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

      <button onClick={show}>remove</button>

      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>

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

export default React.memo(Login)
