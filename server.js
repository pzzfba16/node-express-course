/* DIPENDENZE */
const express = require('express')
const bodyParser = require('body-parser')

/* COSTRUTTORI */
const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/* DATA */
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' },
]

/* ROTTE 
GET che trova tutti gli utenti
*/
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users! Nice!',
        users: mockUserData
    })
})

// GET che trova un utente in base all':id
app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Utente trovato!',
        user: req.params.id
    })
})

// POST che fa il login dell'utente
app.post('/login', function(req, res) {
    const userName = req.body.username
    const password = req.boby.password
    const mockUsername = 'billyTheKill'
    const mockPassword = 'superSecret'

    if (userName === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'Password and Username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'Password and Username do not match!
        })
    }
})

/* SERVER */
app.listen(8000, function() {
    console.log("Il server funziona!")
})