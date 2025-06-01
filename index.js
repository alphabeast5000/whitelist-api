const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const whitelist = [298743938, 1632866443];
const bannedgames = [0];

app.get("/", (req, res) => {
  res.send("WhitelistAPI is online!");
});

app.get("/check", (req, res) => {
  const userId = parseInt(req.query.userId);
  const gameId = parseInt(req.query.gameId);

  const isWhitelisted = whitelist.includes(userId);
  const isBannedGame = bannedgames.includes(gameId);

  res.json({
    allowed: isWhitelisted,
    bannedgame: isBannedGame
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
