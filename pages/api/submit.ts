// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  //Get the Form Data
  const data: Data = await JSON.parse(req.body);

  try {
    const url = process.env.API_URL;
    if (url === undefined) return;

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json ",
        "X-Master-Key": "hiddenkey",
      },
    });
    response = await response.json();
    console.log(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
  return res.status(200).json({ message: "success" });
}
