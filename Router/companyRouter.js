const express = require("express")
const router = express.Router()
const {upload, uploader} = require("../Utilis/multer")

const {createCompany,getCompany} = require("../Controller/companyController")

router.route("/create").post(uploader, createCompany)
router.route("/").get(getCompany)

module.exports = router