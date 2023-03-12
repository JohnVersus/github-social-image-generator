import { NextApiRequest, NextApiResponse } from "next";
import { userAgent } from "next/server";
import { cors } from "./middleware/cors";
import { runMiddleware } from "./middleware/middleware";
import { refererCheck } from "./middleware/refererCheck";
import { requestCheck } from "./middleware/requestCheck";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("-----");
    // Run the middleware
    await runMiddleware(req, res, cors);
    await runMiddleware(req, res, requestCheck);
    await runMiddleware(req, res, refererCheck);

    const { repo_url } = req.query;
    console.log(req.headers.referer);
    console.log(repo_url);
    const { API_PATH } = process.env;
    const requestUrl = API_PATH + `generateGithubSocial?repo_url=${repo_url}`;

    const image_res = await fetch(requestUrl, {
      headers: {
        "Content-Type": "image/png",
      },
    });
    if (!image_res.ok) {
      throw new Error(await image_res?.json());
    }
    const image_array_buffer = await image_res.arrayBuffer();
    const image_buffer = Buffer.from(image_array_buffer);

    // Send the image data as a response
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.setHeader("Content-Type", "image/png");
    res.send(image_buffer);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      console.trace(e.message);
      res.status(400).json(e.message);
    }
  }
}
