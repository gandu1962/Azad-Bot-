const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const Canvas = require("canvas");

module.exports = {
  config: {
    name: "idcard",
    aliases: ["id"],
    version: "2.0",
    author: "azadvai",
    countDown: 5,
    role: 0,
    shortDescription: "User ID card",
    longDescription: "Display stylish user ID card",
    category: "utility",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, usersData }) {
    const uid = event.senderID;

    // 🧠 Try getting avatar
    let avatarUrl;
    try {
      avatarUrl = await usersData.getAvatarUrl(uid);
    } catch (e) {
      avatarUrl = "https://i.imgur.com/1XvnACa.png"; // fallback avatar (no 429 error)
    }

    const userInfo = await usersData.get(uid);
    const userName = userInfo.name || "Unknown";
    const money = userInfo.money || 0;
    const exp = userInfo.exp || 0;
    const level = userInfo.level || 0;

    try {
      const avatar = await Canvas.loadImage(avatarUrl);
      const canvas = Canvas.createCanvas(800, 400);
      const ctx = canvas.getContext("2d");

      // Background
      ctx.fillStyle = "#0f0f0f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Border
      ctx.strokeStyle = "#00ffff";
      ctx.lineWidth = 10;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // Avatar Circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(150, 200, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(avatar, 50, 100, 200, 200);
      ctx.restore();

      // Text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 28px Arial";
      ctx.fillText(`👤 Name: ${userName}`, 300, 100);
      ctx.fillText(`💸 Money: $${money}`, 300, 150);
      ctx.fillText(`⭐ Level: ${level}`, 300, 200);
      ctx.fillText(`🎯 Exp: ${exp}`, 300, 250);
      ctx.fillText(`🆔 UID: ${uid}`, 300, 300);

      // Save
      const imgPath = path.join(__dirname, "tmp", `idcard-${uid}.png`);
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(imgPath, buffer);

      // Send
      api.sendMessage(
        {
          body: "🪪 আপনার আইডি কার্ড:",
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );

    } catch (err) {
      console.log("❌ ID Card Error:", err);
      api.sendMessage("❌ কার্ড বানাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।", event.threadID);
    }
  }
};
