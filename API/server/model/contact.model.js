const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    Image:{
        type: String,
        required:[true, "Contact Image required"]
    }, 
    name:{
        type: String,
        required:[true, "Contact name required"]
    },
    phoneNo:{
        type: String,
        required:[true, "Contact phoneNo required"]
    },
    email:{
        type: String,
        required:[true, "Contact email required"]
    },
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;