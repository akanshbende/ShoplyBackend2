const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const source =
  "mongodb+srv://asbende29:HgkagbcVdF4utUyn@clusterakansh.734wjwt.mongodb.net/?retryWrites=true&w=majority";
// console.log(source);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(source, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTop010gy: true,
      useFindAndModify: false,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
