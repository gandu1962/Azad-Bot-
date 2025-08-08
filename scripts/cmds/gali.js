module.exports = {
  config: {
    name: "gali",
    aliases: ["gali", "insult"],
    version: "1.7",
    author: "rimon",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Sends a random Bangladeshi insult"
    },
    longDescription: {
      en: "Generates and sends a random Bangladeshi insult to roast someone playfully."
    },
    category: "fun",
    guide: {
      en: "{pn} [@mention] or reply to a message"
    }
  },

  onStart: async function ({ api, event }) {
    const insults = [
      "ey to abal ore ki gali dibo ar!",
      "tor bou amar boss azad er mal ar karo na!",
      "sala to bokachuda ar ki bolbo!",
      "kno janu halay ki korlo!",
      "abal to abal e abal ki kono din o valo hoy!",
      "khankirpola re amar kache de!",
      "or mare amar kache diya jaite bol!",
      "are or matha te problem tai kichu boli na!",
      "tui to 1ta madarchud!",
      "ey khankirpola to rat e bou khai ar din e mal khai!"
      // আরও insult চাইলে লিস্টে বাড়াতে পারিস
    ];

    const randomInsult = insults[Math.floor(Math.random() * insults.length)];

    let targetID, targetName;

    if (event.messageReply) {
      targetID = event.messageReply.senderID;
      const userInfo = await api.getUserInfo(targetID);
      targetName = userInfo[targetID]?.name || "তুই";
    } else {
      return api.sendMessage("Reply diya bol kare gali ditam!", event.threadID, event.messageID);
    }

    if (targetID === "61578365162382") {
      return api.sendMessage("kids?! this is my owner azad your daddy 😌", event.threadID, event.messageID);
    }

    const arraytag = [{ id: targetID, tag: targetName }];
    const insultWithName = randomInsult.replace(/তুই/g, targetName).replace(/তোর/g, `${targetName}র`);

    return api.sendMessage({ body: `${insultWithName}`, mentions: arraytag }, event.threadID, event.messageID);
  }
};
