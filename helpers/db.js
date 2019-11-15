const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodblink", {
    useNewUrlParser: true
  });

  mongoose.connection.on("open", () => {
    console.log("mongodb connected");
  });
  mongoose.connection.on("error", err => {
    console.log(err);
  });
};
