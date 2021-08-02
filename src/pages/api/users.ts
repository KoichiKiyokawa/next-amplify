import { PrismaClient, User } from "@prisma/client"
import { NextApiHandler } from "next"

const prisma = new PrismaClient()

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res)
    case "POST":
      return post(req, res)
    default:
      res.status(404)
  }
}

const get: NextApiHandler<User[]> = async (_req, res) => {
  res.status(200).json(await prisma.user.findMany())
}

const post: NextApiHandler<User> = async (req, res) => {
  const createdUser = await prisma.user.create({ data: req.body })
  res.status(200).json(createdUser)
}

export default handler
