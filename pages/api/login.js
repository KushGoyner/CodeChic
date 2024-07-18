import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
  if (req.method === "POST") {

    let user = await User.findOne({email:req.body.email})
    let bytes  = CryptoJS.AES.decrypt(user.password, 'KUSHISKING');
    let originalPassword = bytes.toString(CryptoJS.enc.Utf8);


    try {
        if(user){
            if(req.body.email === user.email && req.body.password === originalPassword){

              var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
                res.status(200).json({success: true,email : user.email,name: user.name});
            }
            else{
                res.status(500).json({success:false,error:"Invalid Crenditials"});
            }
        }
        else{
            res.status(400).json({success:false,error:"Invalid Crenditials"})
        }
        
    } catch (error) {
        res.status(404).json({Error:"Server is not responding"})
    }
    
    

      

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
