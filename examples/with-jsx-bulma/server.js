const express = require('express');
const register = require('@react-ssr-with-less/express/register');

const app = express();

(async () => {
  await register(app);

  app.get('/', (req, res) => {
    const user = { name: 'Bulma' };
    res.render('index', { user });
  });
  
  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
