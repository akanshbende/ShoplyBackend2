const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
