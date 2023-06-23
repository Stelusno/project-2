const Soap = require('../models/soaps'); 

module.exports = {
    index: indexPage,
    show: showPage, 
    new: newPage,
    create, 
    // edit: editPage
}

async function indexPage(req,res) {
    try {
        const soaps = await Soap.find({})
        res.render('soaps/index', {
            soaps
        })
    } catch (err) {
        console.log(err);
        res.render('soaps/index', { errorMsg: err.message }); 
    }   
}

async function showPage(req, res) {
   try { 
        const soap = await Soap.findOne({name: req.params.name})
        res.render('soaps/show', {
        soap
         })
    } catch (err) {
        console.log(err);
        res.render('soaps/show', { errorMsg: err.message }); 
    }
}

function newPage(req, res) {
    res.render('soaps/new', { errorMsg: '' });
}

async function create(req, res) {
    try { 
        await Soap.create(req.body)
        res.redirect('/soaps')
    } catch (err) {
       console.log(err);
       res.render('soaps/show', { errorMsg: err.message }); 
    }
}

// async function editPage(req, res) {
//     try { 
//         res.render('/soaps/edit', ) {

//         }
//     } catch (err) {
//         console.log(err);
//         res.render('soaps/show', { errorMsg: err.message });
//     }
// }