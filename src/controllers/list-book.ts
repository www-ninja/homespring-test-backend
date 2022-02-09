import { Response } from "express";
import { Controller } from "./base-controller";
import { ListBookQueryRequest } from "../requests/list-book";
import { listBook } from "../services/books/list";
import HttpError from "../exceptions/http-error";


export class ListBookController extends Controller {
  public async handler(res: Response, _: BodyRequest, query: ListBookQueryRequest): Promise<Response | void> {
    if (!query?.keyword) throw new HttpError("Keyword is required query param", 400)
    const books = await listBook(query?.keyword ?? "", query?.startIndex ?? 0);
    return res.status(200).send(books);
  }
}