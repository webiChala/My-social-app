import mongoose from 'mongoose';
const jimmaSchema = mongoose.Schema({

    message: String,
    name: String,
    timestamp: String,
    received: Boolean,


})

export default mongoose.model('messagecontent', jimmaSchema);