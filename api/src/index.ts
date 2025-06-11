import express from "express";
import cors from "cors";
import { PostRouter } from "./routers/Post";
const PORT = 9000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", PostRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
