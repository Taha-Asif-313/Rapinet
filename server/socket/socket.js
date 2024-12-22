import { Server } from "socket.io";
const onlineUsers = {};
export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000", // Frontend origin
      methods: ["GET", "POST"], // Allowed methods
      credentials: true, // To support cookies or headers with credentials
    },
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    onlineUsers[userId] = socket.id; // Store userId and socket.id in onlineUsers object

    io.emit("getOnlineUser", Object.keys(onlineUsers));
    console.log(onlineUsers);

    socket.on("disconnect", () => {
      delete onlineUsers[userId]; // Correct way to remove the user from onlineUsers object
    });
  });

  return io;
};

export const getReceiverSocketId = (receiverId)=>{
  return onlineUsers[receiverId]
}