const mongoose = require("mongoose")


const salesReportSchema = mongoose.Schema({
    date:{
        type:String,
       
    },
    hubName:{
        type:String,
    },
    totalExpense:{
        type:Number,
    },
    totalSales:{
        type:Number,
    },
    submittedBy:{
        type:String,
    },
    note:{
        type:String,
    },
    dated:{
        type:String,
    },
    detail:{
        type:String,
    },
    image: {
        type: String,
      },
    profit: {
        type: String,
      },

    staff:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"staffs"
        }
    ,

    hub:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"hubs"
        }
    ,

    company:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"companies"
        }
    
},
{timmestamps:true}
)

module.exports = mongoose.model("salesRecord", salesReportSchema)