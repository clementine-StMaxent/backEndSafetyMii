// @ts-ignore
import express from 'express'
import { routing } from './routing';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Creation du serveur
const app = express();
// config du serveur
app.use(bodyParser.json())

// definiton des routes
routing(app)

// init mongoose
// definie une connexion avec la base de donnée
mongoose.connect('mongodb://localhost:27017/demo', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error'))
db.once('open',()=>console.log("Mongo is Ready for party"))

// Lance le serveur
app.listen(8080, ()=>{
    console.log("Le serveur est lancé")
})