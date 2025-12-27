import { Router } from "express";
import db  from "../DbConnect/dbconnect.js";

const router = Router();

/**
 * CREATE
 */
router.post("/", (req, res) => {
  const { name, description } = req.body;

  const result = db.prepare(
    "INSERT INTO items (name, description, createdAt) VALUES (?, ?, ?)"
  ).run(name, description, new Date().toISOString());

  res.status(201).json({ id: result.lastInsertRowid });
});

/**
 * LIST with filter
 */
router.get("/", (req, res) => {
  const { name } = req.query;

  let query = "SELECT * FROM items";
  const params: any[] = [];

  if (name) {
    query += " WHERE name LIKE ?";
    params.push(`%${name}%`);
  }

  const items = db.prepare(query).all(...params);
  res.json(items);
});

/**
 * GET BY ID
 */
router.get("/:id", (req, res) => {
  const item = db
    .prepare("SELECT * FROM items WHERE id = ?")
    .get(req.params.id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

/**
 * UPDATE
 */
router.put("/:id", (req, res) => {
  const { name, description } = req.body;

  const result = db.prepare(
    "UPDATE items SET name = ?, description = ? WHERE id = ?"
  ).run(name, description, req.params.id);

  if (result.changes === 0) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({ success: true });
});

/**
 * DELETE
 */
router.delete("/:id", (req, res) => {
  const result = db
    .prepare("DELETE FROM items WHERE id = ?")
    .run(req.params.id);

  if (result.changes === 0) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({ success: true });
});

export default router;
