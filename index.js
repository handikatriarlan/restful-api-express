const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
