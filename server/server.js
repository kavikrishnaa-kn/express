const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 4005

app.use(express.json())
app.get('/', (req, res) => {
    res.json({message: "welcome" })
})

app.listen(port, () => {
    console.log(`Server running in: ${port}`)
})