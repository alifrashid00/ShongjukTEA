import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectTOMongoDB from "./db/connectTOMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import {app,server} from "./socket/socket.js";
import dotenv from "dotenv";
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("hello");
})

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(5000,()=>{
    connectTOMongoDB();
    console.log("server running on 5000")
});