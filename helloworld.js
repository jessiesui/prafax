const express = require('express')
const app = express()
const port = 3500sdf sd

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))