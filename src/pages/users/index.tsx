import { User } from "@prisma/client"
import { GetServerSideProps } from "next"
import Link from "next/link"
import React from "react"

type Props = {
  users: User[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { users: await fetch("/api/users").then((res) => res.json()) },
  }
}

const UserIndex: React.VFC<Props> = (props) => {
  return (
    <>
      <h1>user list</h1>
      {props.users.map((user, i) => (
        <div key={i} className="space-x-2">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      ))}

      <div className="text-blue-600">
        <Link href="/users/new">new</Link>
      </div>
      <Link href="about">about</Link>
    </>
  )
}

export default React.memo(UserIndex)
