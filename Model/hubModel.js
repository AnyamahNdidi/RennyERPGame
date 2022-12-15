const mongoose = require("mongoose")


const hubSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    hubToken:{
        type:String,
    },
    staff:{
        type:String,
    },
    company:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"companies"
        }
    ,

    salesRecord:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"salesRecord"
        }
    ]
},
{timmestamps:true}
)

module.exports = mongoose.model("hubs", hubSchema)