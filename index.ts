import express from "express";
import type { Request, Response } from "express";
import { sum_to_n_e,sum_to_n_f,sum_to_n_reduce } from "./src/problem4/Problem4.js";

const app = express();
const PORT = 8000;

app.use(express.json());

//Problem 4
console.log("Problem 4")
console.log(sum_to_n_e(5), "first")
console.log(sum_to_n_f(5), "second")
console.log(sum_to_n_reduce(5), "third")

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
