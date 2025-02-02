/** @format */

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

let items = [{ id: 1, name: "Item 1" }];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(item);
  res.status(201).send(item);
});

app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("item not found.");

  item.name = req.body.name;
  res.send(item);
});

app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port 8000.`);
  console.log(`example app listening at http://localhost:${port}`);
});
