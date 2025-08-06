module.exports = {
  config: {
    name: "example",
    version: "1.0",
    author: "Azad Vai",
    countDown: 5,
    role: 0,
    shortDescription: "Test messageID access",
    longDescription: "Safely access messageID and test event object",
    category: "utility"
  },

  onStart: async function ({ api, event, args }) {
    try {
      if (!event) return api.sendMessage("❌ event is undefined.", event?.threadID || null);

      const messageID = event.messageID || event.message_id || event.mid || "N/A";

      await api.sendMessage(`✅ messageID found: ${messageID}`, event.threadID, event.messageID);

    } catch (err) {
      console.error("❌ Error in 'example' command:", err);
      api.sendMessage("❌ Internal error. Check console log.", event?.threadID || null);
    }
  }
};
