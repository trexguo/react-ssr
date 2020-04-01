const express = require('express');
const register = require('@react-ssr-withLess/express/register');

const app = express();

(async () => {
  await register(app);

  app.get('/', (req, res) => {
    const user = { name: 'styled-components' };
    res.render('index', { user });
  });
  
  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
