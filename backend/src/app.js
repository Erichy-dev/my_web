/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()
const port = process.env.PORT || 8000

app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
  res.send("Hello there from the servers")
})

app.listen(port, () => {
  console.log(`backend listening on port ${port}`)
})