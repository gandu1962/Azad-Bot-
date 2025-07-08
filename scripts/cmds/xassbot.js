module.exports.config = {
  name: "xass",
  version: 0.2,
  author: "azad",
  category: "npx",
  description: "xass bot",
  countdown: 5,
  role: 0,
};

module.exports.onStart = ({}) => {};

module.exports.onChat = async ({ api, event, args }) => {
  try {
    const msg = event.body.toLowerCase();

    if (msg === "xass" || msg === "bayjid") {
      api.sendMessage(
        {
          body: 
`┏━━━✦✗✦━━━┓
 🎀ᴀᴢᴀᴅ ᴄʜᴀᴛ ʙᴏᴛ🎀  
┗━━━✦✗✦━━━┛
> Nickname: - 𝑎𝑧𝑎𝑑•-🦈🕸️🫀
> Owner: -𝑦𝑜𝑢𝑟 𝑎𝑧𝑎𝑑-•-🕷️🕸️🫀 (Etx)
> 🅰🆉🅰🅳 𝐁𝐎𝐓__/:;)🤍
🦈🫀`,
          attachment: await global.utils.getStreamFromURL("http://160.191.129.54:5000/cdn/gTPVJrZLd.jpg"),
        },
        event.threadID,
        event.messageID
      );
    }
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
