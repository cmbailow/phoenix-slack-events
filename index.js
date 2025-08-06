const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/slack/events", (req, res) => {
  const { type, challenge } = req.body;

  if (type === "url_verification") {
    return res.status(200).send({ challenge });
  }

  console.log("Received Slack event:", req.body);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Slack event listener running on port ${PORT}`);
});
Add index.js for Slack event listener
