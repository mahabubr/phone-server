const express = require('express')
const app = express()
const cors = require('cors')
const phones = require('./phone.json')
const port = 5000


app.use(cors())

app.get('/', (req, res) => {
    res.send('phone server running too again again')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)

})

app.listen(port, () => {
    console.log(`server running ${port}`);
})