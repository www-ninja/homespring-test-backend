export interface ListBookQueryRequest extends QueryRequest {
    keyword?: string;
    startIndex?: number;
}