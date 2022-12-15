const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const path = require("path")
const ejs = require("ejs")
const GOOGLE_SECRET = "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";
const GOOGLE_ID =
	"717654860266-4jdicf1esea6bemik2s1duf52dh3tc76.apps.googleusercontent.com";
const GOOGLE_REFRESHTOKEN =
	"1//04Px4yxSiBhMyCgYIARAAGAQSNwF-L9IrrIyoTWoDyjIGyPVkgzSVVSILDZWg4OzXbbcH7B-7bOohKsTPhz1CXZfY-1oDtbpXF4M";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESHTOKEN });

const verifiedCompanyMail = async (company)=>{

  try{
    const accessToken = await oAuth.getAccessToken();
    const transporter = nodemailer.createTransport({
      service :"gmail",
  
      auth:{
          type:"OAUTH2",
          user:"d1churchnetwork@gmail.com",
          refreshToken:accessToken.token,
          clientId:GOOGLE_ID,
          clientSecret:GOOGLE_SECRET,
          accessToken:GOOGLE_REFRESHTOKEN
      }
    })
  
    const buildFile  = path.join(__dirname, "../views/active.ejs")
  
  
    const data = await ejs.renderFile(buildFile, 
  
      {
        name:company.name,
        id:company?.id,
        realToken: company.verifiedToken,
        code:company.companyToken,
        logo:company.logo
      }
      );
       const mailOption = {
        from :"rennys Report♻",
        to:company.email,
        subject:"Account Verification",
        html:data
  
       }
  
       transporter.sendMail(mailOption, ()=>{
        console.log("sent sucessfully")
       })
  }catch(error){
    return error
  }
 


//   const myTranport = nodemailer.createTransport({
//     service:"gmail",
//     auth: {
// 		user: "anyamahedwin@gmail.com",
// 		pass: "jzntihynbiivuleo",
// 	},
//   })


}

module.exports = {
  verifiedCompanyMail
}