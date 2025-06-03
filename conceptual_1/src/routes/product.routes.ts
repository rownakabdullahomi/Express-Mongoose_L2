import { IncomingMessage, ServerResponse } from "http";

export const routeHandler = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
    const url = req.url;
};
