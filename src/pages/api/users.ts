import { User } from "@prisma/client"
import { NextApiHandler } from "next"
import { prisma } from "src/modules/prisma"

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      return post(req, res)
  }
}

const post: NextApiHandler<User> = async (req, res) => {
  const createdUser = await prisma.user.create({ data: req.body })
  res.status(200).json(createdUser)
}

export default handler
