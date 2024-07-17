import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let newUser = new User(req.body)
    await newUser.save()
    
    

      res.status(200).json( newUser );

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
