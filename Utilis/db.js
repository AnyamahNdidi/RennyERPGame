const { monthsShort } = require("moment/moment")
const mongoose = require("mongoose")

const url = "mongodb://0.0.0.0:27017/myErpEvent"

mongoose.connect(url, ()=>{
    console.log("data base is connected")
})

module.exports = mongoose