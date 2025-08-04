module.exports = {
  config: {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Azad Vai",
    description: "Show Owner Info (Text only)",
    commandCategory: "system",
    usages: "",
    cooldowns: 5,
  },

  onStart: async function ({ api, event }) {
    const msg = `
╭─── ⌜ 👑 OWNER INFO ⌟ ───╮
│ 👤 Name: Aɭoŋe Loveʀ
│ 🌐 Facebook: https://www.facebook.com/profile.php?id=61578365162382
│ 💻 GitHub: https://github.com/Bot-azad177/Azad-Bot-.git
│ ✈️ Telegram: https://t.me/gamingazad
│ 📞 Phone: +8801974762479
│ 📍 Location: Bangladesh
│ 🤖 Bot Name: 𝘼𝙯𝙖𝙙 𝙘𝙝𝙖𝙩 𝙗𝙤𝙩
╰─────────────────────────╯`;
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};
