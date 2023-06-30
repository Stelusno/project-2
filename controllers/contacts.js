const Contact = require('../models/contact'); 

module.exports = {
 new: newContact, 
 create
}

function newContact(req, res) {
    res.render('contacts/new', { errorMsg: ''});
}

async function create(req, res) {
    try {
        await Contact.create(req.body)
        res.redirect('/contacts')
    } catch (err) {
       console.log(err);
       res.render('contacts/new', { errorMsg: err.message });
    }
}