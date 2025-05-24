const mongoose = require ("mongoose")

async function connectDB(){
  await mongoose.connect("mongodb+srv://hicaroandre:MsJMeURFGJDJGKS2@products.mq2swi8.mongodb.net/")
}

module.exports = connectDB;