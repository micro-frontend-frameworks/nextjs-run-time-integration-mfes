import ReactDOMServer from "react-dom/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware } from "../../middlewares";
import { cors } from "../../middlewares/cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  if (req.method !== "GET") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    return res;
  }

  const pageQs = req.query["target"];

  if (!pageQs) {
    res.status(400).end("Bad Request");

    return res;
  }

  try {
    const PageComponent = (await import(`../${pageQs}`)).default();
    const html = ReactDOMServer.renderToString(PageComponent);

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).json({ html });
  } catch (error) {
    res.status(500).end("Bad Gateway");
  }

  return res;
}
