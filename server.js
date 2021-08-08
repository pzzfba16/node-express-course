/* DIPENDENZE */
const express = require('express')

/* COSTRUTTORI */
const app = express()

/* SERVER */
app.listen(8000, function() {
    console.log("Il server funziona!")
})