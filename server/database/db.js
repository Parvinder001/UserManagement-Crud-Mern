import mongoose from "mongoose";

const Connection = async () => {

    const uri = "mongodb+srv://parvinder:pinda1234@cluster1.ym8vqj2.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log('error while connection with database', error);
    }

}

export default Connection;