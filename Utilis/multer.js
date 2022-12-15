const multer = require("multer")
const imageMulter = multer()
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, 

        file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
        
        );
    }
  })
  
  const upload = multer({ storage: storage }).single("image")
  const uploader = imageMulter.single("logo")
  module.exports = {upload, uploader}