import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("came");
        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not set. Set it in your environment (Render -> Environment).');
            process.exit(1);
        }

        // Fail fast if the cluster is unreachable and surface detailed error
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Mongo connection error:', {
            message: error.message,
            name: error.name,
            code: error.code,
        });
        process.exit(1);
    }
};

export default connectDB;