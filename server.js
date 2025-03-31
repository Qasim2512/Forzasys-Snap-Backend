/** @format */

import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import photoRoutes from "./routes/photoRoutes.js";
import cors from "cors";
import swaggerUIPath from "swagger-ui-express";
import swaggerjsonFilePath from "./docs/swagger.json" assert { type: "json" };

const app = express();

app.use(
  "/api-docs",
  swaggerUIPath.serve,
  swaggerUIPath.setup(swaggerjsonFilePath)
);

//Set up the app
const corsOptions = {
  origin: ["http://localhost:8081"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Use the routes
app.use("/photo", photoRoutes);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
