import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
    name: String,
    owner: String,
    uId: String
});

const teamTechniciansSchema = new Schema({
    name: String,
    owner: String,
    uId: String,
    team: [memberSchema]
});

const teamEspecialistsSchema = new Schema({ 
    memberSchema,
    team: [teamTechniciansSchema]
});

const teamManagersSchema = new Schema({ 
    memberSchema,
    team: [teamEspecialistsSchema]
});

const teamSchema = new Schema({ 
    memberSchema,
    team: [teamManagersSchema]
});

const TeamStructure = model('teamstructures', teamSchema);
 
export default TeamStructure;


