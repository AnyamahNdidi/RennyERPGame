const companySchema = require("../Model/company")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const streamifier = require("streamifier")
const crypto = require("crypto")
const cloudinary = require("../Utilis/cloudinary")
const { parseArgs } = require("util")
const { resolve } = require("path")
const { networkInterfaces } = require("os")
const {verifiedCompanyMail} = require("../Utilis/email")

const getCompany = async (req, res)=>{
   try{
       const getStudent = await companySchema.find()
       res.status(200).json({
        message:"all data",
        data:getStudent
       })

   }catch(error){
    res.status(404).json({
        message: error.message
    })
   }
}

const createCompany = async (req, res)=>{
   try{
     const {name, email, password,vision} = req.body

     const genSalt = await bcrypt.genSalt(10)
     const hashPassword =await bcrypt.hash(password, genSalt)

     let streamUpload = (req) => {
        return new Promise((resolve, reject) => {
          let stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
  
          streamifier.createReadStream(req?.file.buffer).pipe(stream);
        });
      };

     const image = await streamUpload(req)

     const genNum = crypto.randomBytes(10).toString("hex")
     const token = jwt.sign(genNum, "this_idTheSerect")
     const company =   await companySchema.create({

        name,
        logo:image.secure_url,
        vision,
        status:"admin",
        email,
        password:hashPassword,
        verifiedToken:token
     })

     verifiedCompanyMail(company).then((ressult)=>{
            console.log("message sent", ressult)
     })


     res.status(210).json({
        message:"Account Created",
        data:company
     })

    
     
   }catch(error){
    res.status(404).json({
        message: error.message
    })
   }
}

module.exports = {
    getCompany,
    createCompany
}