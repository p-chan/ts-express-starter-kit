import * as express from 'express'
import Boom from '@hapi/boom'

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const err = Boom.notFound()
  next(err)
}
