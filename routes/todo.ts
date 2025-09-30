import express from "express";
import {
  addTodo,
  getAllTodos,
  getTodo,
  removeTodo,
  updateTodo,
} from "../data.ts";

const router = express.Router();

router.post("/", (req, res) => {
  const text = req.body.text;
  const newTodo = addTodo(text);
  res.json({ message: "Todo added!", todo: newTodo });
});

router.get("/", (req, res) => {
  const todos = getAllTodos();
  res.json({ message: "Todos successfuly fetched!", todos });
});

router.get("/:id", (req, res) => {
  const todo = getTodo(+req.params.id);
  res.json({ message: "Todo successfuly fetched!", todo });
});

router.patch("/:id", (req, res) => {
  const todo = updateTodo(+req.params.id, req.body.text);
  res.json({ message: "Todo successfuly updated!", todo });
});

router.delete("/:id", (req, res) => {
  removeTodo(+req.params.id);
  res.json({ message: "Todo successfuly deleted!" });
});

export default router;
