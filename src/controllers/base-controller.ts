import { NextFunction, Request, Response } from "express";
export abstract class Controller {
  public setUp() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await this.handler(res, req.body, req.query, req.params);
      } catch (err) {
        next(err);
      }
    };
  }

  public async handler(res?: Response, request?: BodyRequest, query?: QueryRequest, params?: ParamsRequest): Promise<Response | void> {
    return res.json();
  };
}
