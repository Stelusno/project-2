const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const soapSchema = new Schema ({
    name: { type: String,
        enum: ['Chivarly & Lust', 'OatMilk & Honey', 'Strictly Feminine', 'Go For Glo', 'Floral EverGlo' ],
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
        min:8.99,
        max:9.99,
        required: true
    },
    }, {
        timestamps: true
    });
   
module.exports = mongoose.model('Soap', soapSchema);