import axios from "axios";
import request from "supertest";
import Server from "../../src/app";

const server = new Server();

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockData = [{
  kind: "books#volume",
  id: "EZ5VAAAAMAAJ",
  etag: "q0dO186wHZw",
  selfLink: "https://www.googleapis.com/books/v1/volumes/EZ5VAAAAMAAJ",
}];

describe("GET \"/api/books\"", () => {
  it(`should return book list`, async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockData
    });
    const response = await request(server.app)
      .get("/api/books")
      .query({
        keyword: "test",
        startIndex: 0
      })
      .send({});

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(mockData);
  });
  it(`should return 400 error`, async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockData
    });
    const response = await request(server.app)
      .get("/api/books")
      .send({});

    expect(response.status).toBe(400);
  });
});
