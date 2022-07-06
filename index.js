const express = require('express')
require('express-async-errors')
const defectsApi = require('./src/terminals/defects');
const countersApi = require('./src/sensors/counters')

const metercounterapi = require('./src/sensors/counters')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// start of application copy - paste on any express js backend API

// This endpoint returns last status registered by device in case of shutdown or system fail
app.get('/:device/status',()=>{

});

// app.use('/api',defectsApi)
app.use('/api/iot',defectsApi)