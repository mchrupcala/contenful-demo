import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({ message: "Projects retrieved successfully." });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};

export default handler;
