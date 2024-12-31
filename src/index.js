import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/server.js";

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log(`MONGO DB CONNECT failed !!! : ${err}`);
});