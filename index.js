const express = require("express");
const config = require("./shared/config");

const app = express();
app.use(express.json());

app.use("/api/articles", require("./api/routes/articles"));

app.get("/", (req, res) => {
  res.json({ message: "blog API", articles: "/api/article" });
});

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
