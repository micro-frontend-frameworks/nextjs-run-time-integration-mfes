// Helper method to wait for a middleware to execute before continuing

import { NextApiRequest, NextApiResponse } from "next";

// And to throw an error when an error happens in a middleware
export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
    next: (result: any) => void
  ) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
