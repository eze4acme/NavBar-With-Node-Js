const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,  'index.html'))
})
app.all('*', (req, res) => {

})

app.listen(6000, () => {
    console.log('App Running on port 6000');
})