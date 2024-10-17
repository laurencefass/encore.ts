import { api, APIError } from "encore.dev/api";
import { formattedDate } from "@common/strings";

export interface HelloResponse {
  status: string;
  message: string;
}

export const get = api(
  { expose: true, auth: false, method: "GET", path: "/hello/:name" },
  async ({ name }: { name: string }): Promise<HelloResponse> => {
    if (!name) throw APIError.invalidArgument;
    const msg = `Hello ${name}!`;
    return {
      status: "PubSub is working",
      message: `${formattedDate()}: ${msg}`,
    };
  }
);
