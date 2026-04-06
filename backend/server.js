import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

const connect = async () => {
   try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("Database connected");
   } catch (error) {
      console.error("Database connection failed:", error.message);
   }
};

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
   await connect();
   console.log(`Server running on http://localhost:${PORT}`);
});