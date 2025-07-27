const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
    try{
        console.log(process.env.DB_CONNECTION_STRING);
        const connectDb = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Database Connected: ${connectDb.connection.name}`);
    } catch(error){
        console.error("DB connection failed");
    }
};

module.exports = connectToDb;