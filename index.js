let express = require("express");
let https = require('https');

app = express();

app.get("/", (req, res) => {
  https.get(req.query["url"], (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    res.set('Content-Type', 'text/text');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
});
app.listen(5000, (req, res) => {
  console.log("Running on port 5000");
});
