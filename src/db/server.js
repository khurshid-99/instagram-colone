import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    console.log(
      `\n MONGODB CONNECT !! DB HOSTE : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo DB connection Failed ${error}`);
    process.exit(1);
  }
};

export default connectDB;