
import express from 'express';
import { ObjectId } from 'mongodb';
import TeamMembers from '../models/modelTeamMembers.js';
import TeamStructure from '../models/modelTeamStructure.js';


const serverFunctions = express.Router();

serverFunctions.get('/teamStructureBy_id', async (req, res) => {
 
  const idParam = req.query.teamId;  
  const oId = new ObjectId(idParam);

  try {
    if (!ObjectId.isValid(oId)) { return res.status(400).json({ error: '>_id error' }); }
    const item = await TeamStructure.findOne({ _id: oId });
    if (!item) { return res.status(414).json({ error: 'not found' }); }
    res.json(item);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error teamStructureBy_id' });
  }

});


serverFunctions.get('/test', async (req, res) => { 
  console.log('testapiservice>>>:');
  res.json({ message: 'Función testapiservice' }); 
});


serverFunctions.get('/teamBy_id', async (req, res) => {

  const idParam = req.query.teamId;
  const oId = new ObjectId(idParam);

  try {
    if (!ObjectId.isValid(oId)) { return res.status(400).json({ error: 'error _id' }); }
    const item = await TeamMembers.findOne({ _id: oId });
    if (!item) { return res.status(404).json({ error: 'not found' }); }
    res.json(item);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error teamBy_id' });
  }

});


serverFunctions.post('/memberData', async (req, res) => {

  const data = req.body;
  const team = data.team;
  const member = data.member;

  try {
    const query = [
      { $match: { [team]: { $elemMatch: { name: member } } } },
      { $unwind: `$${team}` },
      { $match: { [`${team}.name`]: member } }
    ];
    const item = await TeamMembers.aggregate(query);

    if (!item) { return res.status(404).json({ error: 'not found' }); }
    res.json(item);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error memberData' });
  }

});



export default serverFunctions;
