const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const User = require("./Models/userSchema")
const { handleSignUp, handleLogin, handleUserUpdate, handleTotalUpdate, handleDeleteUser } = require("./Routes/Controllers")
const { validateUserSignUp } = require("./Middlewares/userValidation")
//const router = require("./Routes/authRoute")
const app = express()
app.set('view engine', 'ejs');

//app.get('/', (req, res)=>{
//  res.render("signup")
//})




//app.get('/', (req, res)=>{
//  res.render("login")
//})



app.use(express.json())
const PORT = process.env.PORT || 7000



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
      console.log("MongoDB connected")


      app.listen(PORT, ()=>{
                  console.log('app running on $(PORT)...')
      })
})










app.post('/sign-up', validateUserSignUp , handleSignUp )//(req, res)=>{

   // try{

  //  const {email, password, firstName, lastName, stateOfOrigin, dateOfBirth, phoneNumber} = req.body
   
  //    if(!email){
  //      return res.status(401).json({message: "please supply email"})
  //    }

  //    if(!password){
  //      return res.status(401).json({message: "please supply password"})
  //    }

  //    if(!firstName){
  //      return res.status(401).json({message: "please supply first name to make progress."})
  //    }

  //    if(!lastName){
  //      return res.status(403).json({message: "please supply your surname."})
  //    }

  //    if(!stateOfOrigin){
  //      return res.status(401).json({message: "please give state of origin."})
  //    }

  //    if(!dateOfBirth){
  //      return res.status(401).json({message: "please supply your age."})
  //    }

  //    if(!phoneNumber){
  //      return res.status(401).json({message: "please supply your mobile number."})
  //    }


//const existingUser = await User.findOne({email, password})
//  if(existingUser){
//    res.status(400).json({message: "User already exist"})
//  }




//const hashedPassword = await bcrypt.hash(password, 12)
//const newUser = new User({
//    email, 
//    password: hashedPassword,  
//    firstName, 
//    lastName, 
//    stateOfOrigin, 
//    dateOfBirth,
//    phoneNumber
//})
//await newUser.save({})

//return res.status(200).json({
//      message: "account successfully created",
//    newUser: {firstName, lastName, email, phoneNumber, stateOfOrigin, dateOfBirth}
//})


//}




  //catch(error){
  //     console.log("please try again later")
  //}

//})




app.post('/login', handleLogin) 

//async (req, res)=>{


  //const {email, password} = req.body
  //const user = await User.findOne({email})
  //   if(!user){
  //    return res.status(404).json({message: "User does not exist."})
  //   }

  //const isMatch = await bcrypt.compare(password, user?.password)
  //   if(!isMatch){
  //    return res.status(404).json({message: "Invalid email or password."})
  //   }

  //Generate Access Token for user to validate


  //const accessToken = await jwt.sign(
  //  {id: user?._id},
  //   process.env.ACCESS_TOKEN,
  //   {expiresIn: "3h"}
  //)

 //const refreshToken = await jwt.sign(
 //   {id: user?._id},
 //    process.env.REFRESH_TOKEN,
 //    {expiresIn: "30d"}
 // )


 //   res.status(200).json({
 //   message: "Login successful",
 //   accessToken,
//  user
//  })
//})





app.patch('/update/:id', handleUserUpdate)






app.put('/update-all', handleTotalUpdate)





app.delete('/delete/:id', handleDeleteUser)




// app.post('/forgot-password', placeHolder)
