const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const source =
  "mongodb+srv://asbende29:AkanshBende@clusterakansh.734wjwt.mongodb.net/?retryWrites=true&w=majority";
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
