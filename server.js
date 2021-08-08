/* DIPENDENZE */
const express = require('express')

/* COSTRUTTORI */
const app = express()

/* DATA */
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' },
]

/* ROTTE */
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users! Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res) {
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'Utente trovato!',
            user: req.params.id
        })
    })
    /* SERVER */
app.listen(8000, function() {
    console.log("Il server funziona!")
})