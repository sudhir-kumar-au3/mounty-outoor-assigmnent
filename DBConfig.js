const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const {hotelMgtSchema} = require("./model/hotelMgt");
const dotenv=require("dotenv");
dotenv.config();
// connect mongodb database
let url;
if(process.env.DB_URL) url = process.env.DB_URL;
else url ="mongodb://localhost:27017/hotel";
const connection = mongoose.createConnection(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
autoIncrement.initialize(connection);
connection.on("error", () => {
    console.log("> error occurred during db connection")
});
connection.on("open",() => {
    console.log("> successfully connected to db")
})
hotelMgtSchema.plugin(autoIncrement.plugin, {
  model: 'hotelMgt',
  field: 'roomNo',
  startAt: 100
})
const Hotel = connection.model("hotelMgt", hotelMgtSchema);
module.exports = {
    Hotel
}
