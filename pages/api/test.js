import express from 'express';

const app = express();

app.get('/test', async (req, res) => {
  const response = await fetch(`https://sphere-iota.vercel.app/test`);
//   const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  res.json(users);
});

export default app;
