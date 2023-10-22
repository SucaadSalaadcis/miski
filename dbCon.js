const DB = require("mongoose");
DB.set('strictQuery', false);
require('dotenv').config()
const dbConnect = async () => {
    try {
        await DB.connect(process.env.DB_URL)
        console.log("DB connected ...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;

