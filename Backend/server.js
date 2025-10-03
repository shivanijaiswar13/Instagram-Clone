require("dotenv").config();
const connectDB = require("./src/config/db/db");
const cacheClient = require("./src/")

const app = require("./src/app");
const socketIo = require("socket.io");

connectDB();


const io = socketIos(server);

cacheClient.on("connect", ()=>{
    console.log("redis connected successfully");
});

cacheClient.on("error", (error)=>{
    console.log("error connecting to redis ", error);
}
)

io.on("connection", (socket)=>{
    console.log("user connected", socket.id);
});













app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})