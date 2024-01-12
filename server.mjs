import express from 'express';
import next from 'next';
import serverFunctions from './server/apis/serverFuntions.js';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const dbName = 'teamTest';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(cors());
server.use(bodyParser.json());
 // Modifica tu servidor Express
 
 app.get('/api/*', async (req, res) => {
  try {
    // Extrae la ruta específica desde req.params[0]
    const apiRoute = req.params[0];
    
    // Realiza cualquier operación o procesamiento necesario aquí
    const responseData = { mensaje: `Hola desde el servidor Express en la ruta /api/${apiRoute}` };

    // Envía la respuesta al cliente
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
 
server.all('*', (req, res) => {
  console.log(`server.all`);
  return handle(req, res);
});

 server.listen(PORT, HOST, (err) => {
  if (err) throw err;
  console.log(`> Ready on https://${HOST}:${PORT}`);
});

// const uri = `mongodb+srv://${username}:${password}@cluster0.8y0ptqu.mongodb.net/${dbName}`;
// //const uri = `mongodb://localhost:27017/teamTest`; 

// (async () => {
//   try {
//     await mongoose.connect(uri, {});
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     return;
//   }
// })();

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB err:', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('MongoDB disconnected');
// });

// server.get('/test', async (req, res) => {
//   console.log('get test'  ); 
//   res.json({ test: '/test' });
// });

// server.get('/api/user/teamStructureBy_id', async (req, res) => {
//   console.log('get api/user/teamStructureBy_id'  ); 
//   res.json({ test: 'teamStructureBy_id' });
// });
// const idParam = req.query.teamId;  
// const oId = new ObjectId(idParam);

// try {
//   if (!ObjectId.isValid(oId)) { return res.status(400).json({ error: '>_id error' }); }
//   const item = await TeamStructure.findOne({ _id: oId });
//   if (!item) { return res.status(414).json({ error: 'not found' }); }
//   res.json(item);
// }
// catch (error) {
//   console.error(error);
//   res.status(500).json({ error: 'server error teamStructureBy_id' });
// }




// server.use('/api/user', serverFunctions);
//server.listen(4000,'localhost' , (err) => {
  // console.log(`> Ready on http://${HOST}:${PORT}`);