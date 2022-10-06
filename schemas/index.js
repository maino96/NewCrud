const mongoose = require("mongoose");

// const connect = () => {
//   mongoose
//     .connect("mongodb://localhost:27017/homework", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       ignoreUndefined: true,
//     })
//     .catch(err => console.log(err));
// };

// mongoose.connection.on("error", err => {
//   console.error("몽고디비 연결 에러", err);
// });

const connect = () => {
  mongoose.connect(process.env.DB_URL, { ignoreUndefined: true }).catch((err) => {
  console.error(err);
  });
  };

module.exports = connect;