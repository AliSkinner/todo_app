const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
    next();
  } else {
    next();
  }
})

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})
