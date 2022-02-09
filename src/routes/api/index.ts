import express from "express";
import { ListBookController } from "../../controllers/list-book";

const router = express.Router();

router.get("/books", (new ListBookController()).setUp());
export default router;
