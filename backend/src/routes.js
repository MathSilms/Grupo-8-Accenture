const express = require('express');
const routes = express.Router();
const alfabeto = require('./alfabeto')

// user routes
routes.post('/result', (req, res) =>{
    // Entrada
    let { Codigo } = req.body

    console.log(Codigo)

        traducao = Codigo.split(' ').map( letra => {
            return alfabeto[letra]
        }).join('');

    // Retorno
    return res.status(201).json({ traducao })
});


module.exports = routes;