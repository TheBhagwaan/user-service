import { errorHandler } from '../utils/hanlders/errorHandler.js';

export function ErrorHandlingMiddleware(expressApp) {
    expressApp.use(async (error, req, res, next) => {
      if (error && typeof error === "object") {
        if (error.isTrusted === undefined || error.isTrusted === null) {
          error.isTrusted = true;
        }
      }
      let err=await errorHandler.handleError(error);
      return res.status(error.HTTPStatus).send({name:err.name,message:err.message,statusCode:err.HTTPStatus,stack:err.stack});
    });
}