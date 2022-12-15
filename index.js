require("./Utilis/db")
const express = require("express")
const cors = require("cors")
const app = express()
const port = 4040


app.set("view engine", "ejs")

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
   return res.status(200).json({
    message:"api is ready"
   })
})

// app.get("/active", (req, res)=>{

//     const id = req.params.id
//     const companyName = "sant josh "
//     const name= "ajen roben"
//    return res.render("active", {companyName, name})
// })

app.use("/api", require("./Router/companyRouter"))

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})