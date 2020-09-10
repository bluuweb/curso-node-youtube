const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'jdjdjdfas', nombre: 'rex', descripcion: 'rex descripcion'},
            {id: 'jdjdjapss', nombre: 'chanchan', descripcion: 'chanchan descripcion'},
        ]
    })
})

module.exports = router;