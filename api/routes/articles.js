const router = require("express").Router();
const initializeClient = require("../../shared/db");

const getArticles = async () => {
  let articles = [];

  const data = (await initializeClient()).collection("articles").find();
  await data.forEach((article) => articles.push(article));
  return articles;
};

router.get("/", async (req, res) => {
  try {
    const articles = await getArticles();
    res.status(200).json(articles);
  } catch {
    res.status(500).json({ error: "Cannot retrive documents" });
  }
});

module.exports = router;
