const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelMgtSchema = new Schema({
    hotelName: {
        type: String,
        default: "Hotel Red Velvet"
    },
    price: {
        type: Number,
        required: true,
    },
    roomFacilities:[{
        type: String
    }],
    beds: {
        type: Number,
        default: 0
    },
    roomType: {
        type: String,
        default: "NON_AC",
        enum:["AC", "NON-AC"]
    }
},{
    timestamps: true
})
module.exports = {
    hotelMgtSchema
}