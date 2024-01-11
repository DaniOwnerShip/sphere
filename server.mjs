import express from 'express';
import next from 'next';
import userAPIs from './server/api/user.js';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; 
import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
 
const server = express();
server.use(cors());
server.use(bodyParser.json()); 
server.use(router);

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const username = process.env.MONGODB_USER;  
const password = process.env.MONGODB_PASSWORD;  
const dbName = 'teamTest'; 

const uri = `mongodb+srv://${username}:${password}@cluster0.8y0ptqu.mongodb.net/${dbName}`;   
//const uri = 'mongodb://localhost:27017/teamTest'; 

(async () => {
  try { 
    await mongoose.connect(uri, {} ); 
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return;
  }
})();

mongoose.connection.on('error', (err) => {
  console.error('MongoDB err:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

server.use('/api/user', userAPIs);

server.all('*', (req, res) => {
  return handle(req, res);
});
 

server.listen(PORT, HOST, (err) => {
  if (err) throw err;
  console.log(`> Ready on https://${HOST}:${PORT}`);
});