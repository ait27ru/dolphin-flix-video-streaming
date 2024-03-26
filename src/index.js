const express = require("express");
const fs = require("fs");

if (!process.env.PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable PORT."
  );
}

const PORT = process.env.PORT;
const app = express();

app.get("/video", async (req, res) => {
  const videoPath = "./videos/SampleVideo_1280x720_2mb.mp4";
  const stats = await fs.promises.stat(videoPath);
  res.writeHead(200, {
    "content-length": stats.size,
    "content-type": "video/mp4",
  });
  fs.createReadStream(videoPath).pipe(res);
});

app.listen(PORT, () => {
  console.log(
    `Microservice listening on port ${PORT}, point your browser at http://localhost:${PORT}/video`
  );
});
