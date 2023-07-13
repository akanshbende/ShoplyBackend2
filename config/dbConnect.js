const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const source = process.env.MONGODB_URL;
const dbConnect = () => {
  try {
    const conn = mongoose.connect(source, {
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
