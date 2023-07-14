const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
// const source =
//   "mongodb+srv://brimwDQtRLM2tFV0:asbende@29@clusterakansh.734wjwt.mongodb.net/ShoplyDB";
// console.log(source);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
