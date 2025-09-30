import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import todosRoutes from "./routes/todo.ts";

const app = express();

app.use(express.json());

app.use("/todos", todosRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occured!" });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
