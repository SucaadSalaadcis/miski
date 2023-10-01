const DB = require("mongoose");

const dbConnect = async () => {
    try {
        await DB.connect(process.env.DB_URL)
        console.log("DB connected ...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;