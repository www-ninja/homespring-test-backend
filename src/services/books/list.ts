import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../../config/env-vars";

export const listBook = async (keyword: string, startIndex: number): Promise<IBook[]> => {
    const result: AxiosResponse<IBook[]> = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${API_KEY}&startIndex=${startIndex}`);
    return result?.data || [];
}