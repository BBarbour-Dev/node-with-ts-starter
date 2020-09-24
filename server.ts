import express from "express";

const app = express();

const PORT = 8000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
