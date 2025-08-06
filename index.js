const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080; // 🛠 CHANGED fallback from 3000 → 8080

app.use(bodyParser.json());

app.post("/slack/events", (req, res) => {
  const { type, challenge } = req.body;

  if (type === "url_verification") {
    res.setHeader("Content-Type", "text/plain"); // ✅ REQUIRED
    return res.status(200).send(challenge);
  }

  console.log("Received Slack event:", req.body);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Slack event listener running on port ${PORT}`);
});
