//This is a demo db , the original files are safe

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jyotirmoyroy649:b1O6C67uH8zGInZ6@cluster0.tswulnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("CONNECTED TO MONGO DB DATABASE 🌐");
  });
};

module.exports = connectToMongo;
