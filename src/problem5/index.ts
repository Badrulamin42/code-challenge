import express from "express";
import itemsRouter from "./Routes/item.js";
import cors from "cors";

const app = express();

app.use(cors()); // cors

app.use(express.json());

app.use("/items", itemsRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
