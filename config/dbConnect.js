const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const source =
  "mongodb+srv://AdminAkansh:Admin@cluster0.qxhvacg.mongodb.net/ShplyDB";
// process.env.MONGODB_URL

// console.log(source);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(source, {});
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
