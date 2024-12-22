import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import connectDb from "./Config/connectDb.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { initSocket } from "./socket/socket.js";

// Create an Express app
const app = express();

// Connect to the database
connectDb();

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Required if you're working with cookies or sessions
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes setup
app.use("/api/auth", userRoute);
app.use("/api/message", messageRoute);




// Create the HTTP server using the Express app
const server = http.createServer(app);

const io = initSocket(server);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


export {io}
