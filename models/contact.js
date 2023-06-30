const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    name: {type: String, 
        required: true
    
    },
    email: {type: String, 
        required: true
    
    },
    phoneNumber: {type: String, 
        required: true
    
    },
    comment: {type: String, 
        required: true
    
    }
}, {
    timestaps: true
});


module.exports = mongoose.model('Contact', contactSchema);