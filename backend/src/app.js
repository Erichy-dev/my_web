/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose");
const debug = require("debug")("database")
// reducing the time required for the client to get and load the page.
const compression = require("compression")
// set appropriate headers that help protect your app from well=known web vulnerabilities
const helmet = require("helmet")

const path = __dirname + "/app/dist/"
const app = express()
const port = process.env.PORT || 8000

app.use(express.static(path))
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(compression())
app.use(helmet())

const dev_db_url = "mongodb://localhost:27017/test";
const mongodb = process.env.MONGODB_URI || dev_db_url;
async function main(){
  await mongoose.connect(mongodb)
}
try {
  main()
} catch (error) {
  debug(error)
}

app.get('/', (req, res) =>{
  res.sendFile(path + "index.html")
})

app.listen(port)