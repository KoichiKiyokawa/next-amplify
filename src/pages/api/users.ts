import { PrismaClient, User } from "@prisma/client"
import { NextApiHandler } from "next"

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      return post(req, res)
    default:
      res.status(404)
  }
}

const post: NextApiHandler<User> = async (req, res) => {
  const prisma = new PrismaClient()
  const createdUser = await prisma.user.create({ data: req.body })
  res.status(200).json(createdUser)
}

export default handler
