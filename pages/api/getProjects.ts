import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/t86k561yagqf/entries",
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      console.log("data: ", data);
      res.status(200).json(data);
    } catch (err) {
      console.log("something went wrong: ", err);
      res.status(500).json({ message: "something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};

export default handler;
