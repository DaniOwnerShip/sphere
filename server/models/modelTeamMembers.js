import { Schema, model } from 'mongoose';

const memberDataSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    rol: String,
    skills: {
        electrical: Number,
        mechanical: Number,
        chemical: Number
    },
    _teamOwner: {
        type: Schema.Types.ObjectId,
        ref: 'teammembers'
    }
});
  
 
const TeamMembers = model('teammembers', memberDataSchema);
 
export default TeamMembers;