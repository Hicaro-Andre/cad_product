const mongoose = require ("mongoose")

async function connectDB(){
  await mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@products.mq2swi8.mongodb.net/`)
}

module.exports = connectDB;