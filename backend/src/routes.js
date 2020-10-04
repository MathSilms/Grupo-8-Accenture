const express = require('express');
const routes = express.Router();
const alfabeto = require('./alfabeto')

// user routes
routes.get('/result', (req, res) =>{
    // Entrada
    let { Codigo } = req.body

    const adawd = `${asdawdasd}  dawdasdawd `
    console.log(adawd)

        traducao = Codigo.split(' ').map( letra => {
            return alfabeto[letra]
        }).join('');

    // Retorno
    return res.status(201).json({ traducao })
});


module.exports = routes;