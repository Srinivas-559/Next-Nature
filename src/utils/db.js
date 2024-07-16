import mongoose from "mongoose"

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectDB =async  () => {
    try {
        await mongoose.connect("mongodb+srv://asanjeevroyal:sanjeev@cluster0.heyogjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", connectionOptions);
        // await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGO_URL}/nextnature`, connectionOptions);
        console.log("Database Connected ");

    } catch (err) {
        console.log("Failed to connect ",err);
    }
}

export default connectDB;