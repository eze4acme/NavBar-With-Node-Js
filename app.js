const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))

app.get('/', (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
})
app.all('*', (req, res) =>{
    res.status(400).send('Opps! file does not exist')
})

app.listen(5000, () =>{
    console.log('App is currently lsitening on port 5000');
})