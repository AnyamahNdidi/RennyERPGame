const mongoose = require("mongoose")


const reportSchema = mongoose.Schema({
    data:{
        type:String,
    },
    totalExpense:{
        type:String,
    },
    totalSales:{
        type:String,
    },
    company:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"companies"
        }
    ,

    staff:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"staffs"
        }
    
},
{timmestamps:true}
)

module.exports = mongoose.model("reportHistories", reportSchema)