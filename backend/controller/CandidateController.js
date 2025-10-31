const Candidatemodel= require('../models/candidateloginmodel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signup= async (req,res)=>{
   try{
      const {email, password }= req.body;
      console.log(email);
      if (!email || !password) {
          return res.status(400).json({
           success: false,
           message: "Please insert the required information",
           });
        }
      const existingUser = await Candidatemodel.findOne({ email });

      if (existingUser) {
         return res.status(400).json({ 
            success: false,
            message: "Email already exists" 
         });
         }

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const candidate= new Candidatemodel({
         email:email,
         password:hashedPassword
      })

      await candidate.save();
      res.status(201).json({
         success:true,
         message:"Account created successfully"
      })
   }
   catch(err){
      res.status(500).json({
         success:false,
         message:err.message,
      })
    
   }
}

module.exports={signup}