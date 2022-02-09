import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8000;
export const APP_DEBUG = process?.env?.["APP_DEBUG"]?.toLowerCase() ?? false;
export const NODE_ENV = process.env.NODE_ENV;
export const API_KEY = process.env.API_KEY;
