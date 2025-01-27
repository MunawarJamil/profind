import mongoose from "mongoose";
const db_connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
         
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    }

    export default db_connection;