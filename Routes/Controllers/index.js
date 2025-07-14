
const User = require("../../Models/userSchema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")




const handleSignUp = async (req, res)=>{

//try{

    const {email, password, firstName, lastName, stateOfOrigin, dateOfBirth, phoneNumber} = req.body
//  const goRound = User
      if(!email){
        return res.status(401).json({message: "please supply email"})
      }

      if(!password){
        return res.status(401).json({message: "please supply password"})
      }

      if(!firstName){
        return res.status(401).json({message: "please supply first name to make progress."})
      }

      if(!lastName){
        return res.status(403).json({message: "please supply your surname."})
      }

      if(!stateOfOrigin){
        return res.status(401).json({message: "please give state of origin."})
      }

      if(!dateOfBirth){
        return res.status(401).json({message: "please supply your age."})
      }

      if(!phoneNumber){
        return res.status(401).json({message: "please supply your mobile number."})
      }


const existingUser = await User.findOne({email, password})
  if(existingUser){
    res.status(400).json({message: "User already exist"})
  }




const hashedPassword = await bcrypt.hash(password, 12)
const newUser = new User({
    email, 
    password: hashedPassword,  
    firstName, 
    lastName, 
   stateOfOrigin, 
    dateOfBirth,
    phoneNumber
})
await newUser.save({})

return res.status(200).json({
    message: "account successfully created",
    newUser: {firstName, lastName, email, phoneNumber, stateOfOrigin, dateOfBirth}
})


}




  //catch(error){
  //     console.log("please try again later")
  //}

//} 




const handleLogin = async (req, res)=>{

   const {email, password} = req.body
    const user = await User.findOne({email})
       if(!user){
        return res.status(404).json({message: "User does not exist."})
       }
  
    const isMatch = await bcrypt.compare(password, user?.password)
       if(!isMatch){
        return res.status(404).json({message: "Invalid email or password."})
       }
  
    //Generate Access Token for user to validate
  
  
    const accessToken = await jwt.sign(
      {id: user?._id},
       process.env.ACCESS_TOKEN,
       {expiresIn: "3h"}
    )
  
   const refreshToken = await jwt.sign(
      {id: user?._id},
       process.env.REFRESH_TOKEN,
       {expiresIn: "30d"}
    )
  
  
      res.status(200).json({
      message: "Login successful",
      accessToken,
      user
    })
  
}




const handleUserUpdate = async (req, res)=>{
    const {id} = req.params
    const {firstName, dateOfBirth, phoneNumber} = req.body
    const userUpdate = await User.findOne({firstName, dateOfBirth, phoneNumber})


    return res.status(200).json({message:
       "Updated successfully.",
       userUpdate
      })

} //Patch: Partial modification




const handleTotalUpdate = async (req, res)=>{
    const { id } = req.params
    const {email, stateOfOrigin, dateOfBirth, phoneNumber} = req.body
    const userTotalUpdate = await User.findById({email, stateOfOrigin, dateOfBirth, phoneNumber})



    return res.status(200).json({message: "Modifified successfully."})
}  //PUT request: Erasure of user ID replaced by new information.




const handleDeleteUser = async (req, res)=>{

   const { id } = req.body
   const deleteUser = await User.findByIdAndDelete( id )

}
















module.exports = {

    handleSignUp,
    handleLogin,
    handleUserUpdate,
    handleTotalUpdate,
    handleDeleteUser
}