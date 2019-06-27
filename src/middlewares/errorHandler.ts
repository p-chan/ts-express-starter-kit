import * as express from 'express'

export default async (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  return err.isBoom
    ? res.status(err.output.statusCode).json(err.output.payload)
    : res.status(err.statusCode).json(err)
}
