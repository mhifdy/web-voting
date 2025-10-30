const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(express.static(path.join(__dirname, "page")));
app.use("/asset", express.static(path.join(__dirname, "asset")));

app.get("/pertanyaan.html", (req, res) => {
  res.sendFile(path.join(__dirname, "page", "pertanyaan.html"));
});

app.get("/review-informasi.html", (req, res) => {
  res.sendFile(path.join("page", "review-informasi.html"));
});

app.get("/", (req, res) => {
  res.sendFile("index.html", option_page);
});

io.on("connection", (socket) => {
  console.log("client connected");
});

httpServer.listen(3500);
