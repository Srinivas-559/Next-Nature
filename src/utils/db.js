import mongoose from "mongoose"

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectDB =async  () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/nextnature", connectionOptions);
        console.log("Database Connected ");

    } catch (err) {
        console.log("Failed to connect ",err);
    }
}

export default connectDB;