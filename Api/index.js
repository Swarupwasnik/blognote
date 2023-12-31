const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categoris");
const multer=require('multer');
const path=require("path");

dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
   
  })
  .then(console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
cb(null,"images")
  },
  filename:(req,file,cb)=>{
    cb(null,"hello.jpeg");
  },

});
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("file has been uploaded");
})


app.use("/api/auth", authRoute);//LOgin and Signup
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5300", () => {
  console.log("backend is running");
});
