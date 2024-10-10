import express from "express";
const app = express();
const PORT = 9111;

app.get((request, response) => {
  response.send("hello huselt");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
