require("dotenv").config();
const { cache } = require("react");
const app = require("./src/app");
const socketIo = require("socket.io");


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
})











app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})