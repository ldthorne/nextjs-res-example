const express = require('express');
const next = require('next');
const PORT = process.env.PORT || 4567;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
.then(() => {
  const server = express();
  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  })
  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    if (dev) {
      console.log(`> Ready on http://localhost:${PORT}`);
    } else {
      console.log(`> Read on port ${PORT}`);
    }
  });
});