import { listBook } from "../../src/services/books/list";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockData = [{
  kind: "kind",
  id: "id",
  etag: "etag",
  selfLink: "self-link",
}];


describe("ListBook service", () => {
  it("should return null in testing", async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockData
    });

    const books = await listBook("test", 0);
    expect(books).toMatchObject(mockData);
  });
});
