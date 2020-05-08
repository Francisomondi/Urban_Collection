const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    date: {
        type: Date,
        default: Date.now(),
    },
});

const Category = module.exports = mongoose.model("categories", productSchema);
