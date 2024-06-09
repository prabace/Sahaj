import mongoose from 'mongoose';

const taskcategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('taskCategory', taskcategorySchema);