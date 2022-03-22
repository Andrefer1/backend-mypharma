import "dotenv/config";

import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vhvta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected database!"))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

export default mongoose;
