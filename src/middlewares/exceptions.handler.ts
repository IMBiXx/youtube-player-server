import { NextFunction, Request, Response } from 'express';

/**
 * Global error management middleware
 *
 * @param err - The Express error (can be ours or another)
 * @param req - The initial request
 * @param res - The response object
 * @param next - Allows to pass to the next middleware if exists
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  /**
   * See "The default error handler" in the documentation above
   */
  if (res.headersSent) {
    return next(err);
  }

  /**
   * If so, we know it's our own error
   */
  if (err.status && err.error) {
    return res.status(err.status).json({ error: err.error });
  }

  /**
   * In other cases, we return a 500
   */
  return res.status(500).json({ error: 'Internal error' });
};
