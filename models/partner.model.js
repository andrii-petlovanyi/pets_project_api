const mongoose = require('mongoose');
const { SchemaTypes } = mongoose;
const Schema = mongoose.Schema;

const Partner = new Schema({
    name: {
        type: SchemaTypes.String,
        required: [true, 'Set name for partner'],
    },
    email: {
        type: SchemaTypes.String,
        required: [true, 'Set email for partner'],
    },
    phone: {
        type: SchemaTypes.String
        
    },
    address: {
        type: SchemaTypes.String,
    },
    avatarURL: {
        type: SchemaTypes.String,
        
    },
    workTime: {
        type: SchemaTypes.String,
        
    },
});

module.exports = mongoose.model('Partner', Partner);