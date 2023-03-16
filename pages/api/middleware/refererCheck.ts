import { NextApiRequest, NextApiResponse } from "next";
import { allowedOrigins } from "./cors";
// Middleware to check if request is from a referer
export const refererCheck = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const referer = req.headers.referer;
  console.log({ referer });

  if (!referer) {
    return res.status(403).json({ error: "Forbidden" });
  }
  const referer_root = new URL(referer).origin;
  if (referer && allowedOrigins.indexOf(referer_root) !== -1) {
    next();
  } else {
    // Request is not from a allowed origins, return a 403 Forbidden error
    return res.status(403).json({ error: "Forbidden" });
  }
};
