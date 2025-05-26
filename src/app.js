require ( 'dotenv' ) . config ( )
console.log ( process.env ) 
const express = require ("express")
const routes = require ("./routes/routes.js")

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;