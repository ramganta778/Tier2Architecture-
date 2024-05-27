let mongoose = require("mongoose");

let connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ramganta778:balaji@cluster0.vhgpcgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Successfully Connected to the DB");
  } catch (err) {
    console.log("Unable to connect");
  }
};

connectToDB();
