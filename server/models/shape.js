const mongoose = require('mongoose');

const shapeSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Shape = mongoose.model('Shape',shapeSchema);

module.exports = { Shape }