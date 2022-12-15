const mongoose = require("mongoose")


const staffSchema = mongoose.Schema({
    companyName:{
        type:String,
        unique:true
    },
    userName:{
        type:String,
    },
    staffToken:{
        type:String,
    },
    status:{
        type:String,
        unique:true
    },
    verifiedToken:{
        type:String,
    },
    verified:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    userImage: {
        type: Boolean,
      },

    company:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"companies"
        }
    ,

    hub:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"hubs"
        }
    ],

    history:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reportHistories"
        }
    ],

    salesRecord:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"salesRecord"
        }
    ]
},
{timmestamps:true}
)

module.exports = mongoose.model("staffs", staffSchema)