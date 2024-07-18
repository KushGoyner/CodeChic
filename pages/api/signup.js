import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {name,email,password} = req.body;
    let passwordS = CryptoJS.AES.encrypt(password, 'KUSHISKING').toString();



    let newUser = new User({name,email,password:passwordS});
    await newUser.save()
    
    

      res.status(200).json( newUser );

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
