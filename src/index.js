const app = require('./app')
const connectDB = require("./config/db")

connectDB();

app.listen(3333, () => console.log("Server is running"))