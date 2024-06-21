const app = require("./src/app.js");
const config = require("./src/config/config.js");
const connectDB = require("mb64-connect");

const startServer = async () => {
await connectDB(config.mongoURI);
app.listen(config.port, () => {
    console.log(`[1]   ➜  Client:   http://localhost:5173/`);
    console.log(`[2]   ➜  Server:   http://localhost:${config.port}/`);
});
};

startServer();
