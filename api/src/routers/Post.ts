import { Request, Response, Router } from "express";
import { valueGenerator } from "../utils/awaitingResolvedValue";
import { processMessage } from "../utils/processMessage";
import { Readable } from "stream";

export const PostRouter = Router();

PostRouter.post("/post", (req: Request, res: Response) => {
  try {
    const payload = req.body;

    switch (payload?.event) {
      case "message":
        processMessage(payload);
        res.status(200).json({ msg: "post went success" });
        return;

      default:
        res.status(400).json({ msg: "Unknown event type" });
        return;
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, msg: (error as Error).message || "Internal error" });
    return;
  }
});

PostRouter.get("/stream", async (req: Request, res: Response) => {
  try {
    const stream = Readable.from(valueGenerator());
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // stream.pipe(res);
    req.on("close", () => {
      console.log("💨 Client disconnected from /stream");
      stream.destroy();
    });

    stream.on("data", (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
    return;
  } catch (error) {
    console.log(error);
  }
});
