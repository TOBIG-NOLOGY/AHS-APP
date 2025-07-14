const jwt = require("jsonwebtoken")



const validateUserSignUp = (req, res, next)=>{
    const {email, password, firstName, lastName, stateOfOrigin, dateOfBirth, phoneNumber} = req.body
    const errors = []
   
    if(!email){
        errors.push("Please supply email.")
    }

    if(!password){
        errors.push("Please supply password.")
    }

    if(!firstName){
        errors.push("Please supply your first name.")
    }

    if(!lastName){
        errors.push("Please supply your surname.")
    }

    if(!stateOfOrigin){
        errors.push("Please supply your state of origin.")
    }

    if(!dateOfBirth){
        errors.push("Please supply your date of birth.")
    }

    if(!phoneNumber){
        errors.push("Please supply your mobile number.")
    }

    if(errors.length > 0){
        res.status(400).json({message: errors})
    }



     next()
    
}



const authorization = async (req, res, next)=>{
    const token = req.header("Authoriztion")

    if(!token){
        res.status(401).json({message: "Please login."})
    }

const splitToken = token.split(" ")

const realToken = splitToken[1]

const decodedToken = jwt.verify(realToken, '${process.env.ACCESS_TOKEN}')
   if(!decodedToken){
    res.status(401).json({messaage: "Authorised User."})
   }

const user = await User.findById(decodedToken.id) 
   
   if(!user){
    res.status(404).json({message: "User does not exist"})
   }

   req.user = usernext()
    console.log({User})

}





module.exports = {
    validateUserSignUp,
    authorization
}