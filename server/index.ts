import express from "express";
import dotenv from "dotenv";
import cors from "./src/middleware/cors";
import connect from "./src/database/config";
import router from "./src/routes";

dotenv.config();

const port = process.env.PORT;
const app = express();

app
  .use(
    cors({
      allowedOrigins: ["*",
      ],
      allowedHeaders: ["Authorization", "Content-Type", "token", 'origin'],
      credentials: true,
    })
  )
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(router)

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at ${port}`);
    });
  })
  .catch((error) => {
    console.log("🚀 ~ file: index.ts:29 ~ error:", error);
    process.exit();
  });