const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://azharansarisurajpur:wPdPKuG8fSYjs0oZ@devtinder.gqlpt.mongodb.net/devTinder"
    );
};

module.exports = connectDB;
