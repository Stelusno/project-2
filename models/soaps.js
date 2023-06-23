const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const soapSchema = new Schema ({
    name: { type: String,
        enum: ['Chivarly & Lust', 'OatMilk & Honey', 'Strictly Feminine', 'Go For Glow', 'Floral EverGlo' ],
        required: true
    },
    category: {type: String,
        enum: ['Face Bar','Yoni Bar', 'Full Body Bar' ],
        required: true
    },
    scent: {type: String, 
        enum: ['Masculine', 'Feminine', 'Unisex'],
        required: true
    },
    price: {type: Number, 
        min:7,
        max:20,
        required: true
    }
    }, {
        timestamps: true
    });
   
module.exports = mongoose.model('Soap', soapSchema);