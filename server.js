const express = require('express')
const app = express()
const port= 3000

app.get('/', (req, req) => res.send('Hello HubSpot'))
app.listen(port, () => console.log('Test App 1 listening on port ${port}!'))
