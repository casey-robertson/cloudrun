const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello World - Casey's Cloud Run",
  });
});

app.listen(port, () =>
  console.log(`Example cloud run app listening on port ${port}!`)
);
