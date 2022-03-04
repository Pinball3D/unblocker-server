let express = require("express");
let https = require('https');
const port = process.env.PORT || 5000;
app = express();

app.get("/", (req, res) => {
  https.get(req.query["url"], (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(resp.headers)
    if(resp.headers['content-type'] == "text/html") {
      res.set('Content-Type', 'text/text');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(data);
    } else {
      res.set('Content-Type', resp.headers['content-type']);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(Buffer.from(Buffer(data).toString('base64'), 'base64'););
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
});
app.listen(port, (req, res) => {
  console.log(`Running on port ${port}`);
});
