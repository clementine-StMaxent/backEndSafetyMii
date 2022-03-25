// import { userModel, userSchema } from './repositories/userRepositories';
// @ts-ignore
import express from 'express'
import { routing } from './routing';
// import bodyParser from 'body-parser'
require('dotenv').config()
// import fs = require('fs')
import  mongoose  from 'mongoose';


// Creation du serveur
const app = express()
// config du serveur


// definiton des routes
routing(app)

// init mongoose
// definie une connexion avec la base de donnée
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS
const uri = 'mongodb+srv://' + USER + ':' + PASS + '@cluster0.opbbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('connexion à Mongo réussi')
  })
  .catch(() => {
    console.log(uri)
    console.log('connexion à Mongo échoué')
  })




// app.use(express.json())


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
  next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Lance le serveur
app.listen(8080, () => {
  console.log("Le serveur est lancé")
})