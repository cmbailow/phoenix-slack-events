1:  const express = require("express");                      // ✅ Loads Express
2:  const bodyParser = require("body-parser");              // ✅ Loads body parser
3:  const app = express();                                  // ✅ Initializes app
4:  const PORT = process.env.PORT || 3000;                  // ✅ Sets port (env fallback)
5:  
6:  app.use(bodyParser.json());                             // ✅ Parses incoming JSON
7:  
8:  app.post("/slack/events", (req, res) => {               // ✅ Slack POST endpoint
9:    const { type, challenge } = req.body;                 // ✅ Destructures incoming Slack data
10: 
11:   if (type === "url_verification") {                    // ✅ Handles Slack URL verification
12:     return res.status(200).send(challenge);             // ✅ Sends correct plain text (not wrapped)
13:   }
14: 
15:   console.log("Received Slack event:", req.body);       // ✅ Logs incoming events
16:   res.status(200).send();                               // ✅ Responds with 200 for other events
17: });
18: 
19: app.listen(PORT, () => {                                // ✅ Starts the server
20:   console.log(`Slack event listener running on port ${PORT}`);
21: });
