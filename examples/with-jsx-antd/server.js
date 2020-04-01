const express = require('express');
const register = require('@react-ssr-with-less/express/register');

const app = express();

(async () => {
  await register(app);

  app.get('/', (req, res) => {
    const title = 'Home Page - @react-ssr-with-less/express with And Design';
    res.render('index', { title });
  });

  app.get('/next', (req, res) => {
    const title = 'Next Page - @react-ssr-with-less/express with And Design';
    res.render('next', { title });
  });

  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
