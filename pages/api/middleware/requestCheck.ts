import { NextApiRequest, NextApiResponse } from "next";

// Middleware to check if request is from a browser
export const requestCheck = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const userAgent = req.headers["user-agent"];

  const safety =
    (userAgent as string)?.includes("Mozilla") ||
    (userAgent as string)?.includes("Safari") ||
    (userAgent as string)?.includes("AppleWebKit") ||
    (userAgent as string)?.includes("Chrome");
  console.log({ userAgent: safety });
  if (safety) {
    // Request is from a browser
    next();
  } else {
    // Request is not from a browser, return a 403 Forbidden error
    return res.status(403).json({ error: "Forbidden" });
  }
};
