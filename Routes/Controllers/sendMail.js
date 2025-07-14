const nodeMailer = require("nodemailer")








const sendForgotPasswordEmail = async ( email, token )=>{

    try{
             let emailTransport = nodeMailer.createTransport({
                 service: "gmail",
        auth: {
           user: process.env.Email, //'$(process.env.EMAIL)'
           pass: '$(process.env.EMAIL_PASSWOED)' 
        }    

    })

    const emailContent = {
         
  from: `${process.env.EMAIL}`,
  to: `${email}`,
  subject: "Reset Password Notification Message",
  html: `
    <h1>Here is the token to reset your password: ${token}</h1>
    <p>
      <a href="https://www.facebook.com/kehinde.oluwatobi.33/${token}" style="padding: 10px 15px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Reset Password Button</a>
    </p>
    <p>Please click the button above. If it is unresponsive, click the link below:</p>
    <p>
      <a href="https://www.facebook.com/kehinde.oluwatobi.33/${token}">https://www.facebook.com/kehinde.oluwatobi.33/${token}</a>
    </p>
    <p>Your token: ${token}</p>
  `
};

        //from: '$(process.env.EMAIL)',
        //to: '${email}',
        //subject: "Reset Password Notification Message",
        //html: '<h1>Here is the token to reset your password:$(token)

        //<a class " " href= 'https://www.facebook.com/kehinde.oluwatobi.33/${token}'>Reset Password Button</a>
        
        //Please click the button but if it is unresponsive click the link below:

        //<a href= 'https://www.facebook.com/kehinde.oluwatobi.33/${token}'>Link</a>

        //${token}

        //</h1>
   // }

    await emailTransport.sendMail( emailContent )

    }

    catch(error){
        console.log(error)
    }
}

  module.exports = sendForgotPasswordEmail