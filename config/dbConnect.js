const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const source = "mongodb://localhost:27017/ShoplyDB?directConnection=true";
console.log(source);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(source, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
