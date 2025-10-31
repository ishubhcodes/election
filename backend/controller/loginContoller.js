const Candidatemodel= require('../models/candidateloginmodel')
const bcrypt = require('bcrypt');

const login = async (req,res)=> {
    try{
        const{email,password}=req.body;
        console.log(email);
        if (!email || !password) {
          return res.status(400).json({
           success: false,
           message: "Please insert the required information",
           });
        }

        const existingCandidate = await Candidatemodel.findOne({ email });
        
        if (!existingCandidate) {
            return res.status(400).json({ 
            success: false,
            message: "Email not found" 
            });
        }
        const isMatch = await bcrypt.compare(password, existingCandidate.password);

         if(!isMatch){
            res.status(400).json({
                success:false,
                message:"Password Incorrect"
            })
         }

         res.status(200).json({
            success:true,
            message:"Login succesful"
         })
    } catch(error){
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }

}

module.exports={login}