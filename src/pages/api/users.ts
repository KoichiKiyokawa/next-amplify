import { NextApiHandler } from "next"

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

const get: NextApiHandler = async (_req, res) => {
  res.status(200).json(
    Array.from(Array(10).keys()).map((i) => ({
      id: i,
      name: `user${i}`,
      email: `user${i}@example.com`,
    }))
  )
}

const post: NextApiHandler = async (_req, res) => {
  await new Promise((res) => setTimeout(res, 1000))
  res.status(200)
}

export default handler
