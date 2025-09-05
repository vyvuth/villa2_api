const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("villa.json");
const middleWare = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middleWare);
server.use(router);

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, () => {
  console.log(`Json-server running on http://${HOST}:${PORT}`);
});
