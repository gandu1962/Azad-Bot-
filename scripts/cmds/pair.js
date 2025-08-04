const axios = require("axios");
const fs = require("fs-extra");
const jimp = require("jimp");
const path = require("path");

module.exports.config = {
  name: "pair",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "azad vai",
  description: "Pair two users with a fun compatibility score (Goat V2)",
  commandCategory: "picture",
  usages: "[auto]",
  cooldowns: 5,
  dependencies: {
    axios: "",
    "fs-extra": "",
    jimp: ""
  }
};

module.exports.onStart = async () => {
  const downloadFile = global.utils.downloadFile;
  const canvasPath = path.join(__dirname, "cache/canvas");
  const framePath = path.join(canvasPath, "pairing.png");

  if (!fs.existsSync(canvasPath)) fs.mkdirSync(canvasPath, { recursive: true });
  if (!fs.existsSync(framePath)) {
    await downloadFile("https://i.postimg.cc/X7R3CLmb/267378493-3075346446127866-4722502659615516429-n.png", framePath);
  }
};

async function circleCrop(imagePath) {
  const image = await jimp.read(imagePath);
  image.circle();
  return await image.getBufferAsync("image/png");
}

async function makePairImage({ one, two }) {
  const canvasPath = path.join(__dirname, "cache/canvas");
  const base = await jimp.read(path.join(canvasPath, "pairing.png"));

  const onePath = path.join(canvasPath, `avt_${one}.png`);
  const twoPath = path.join(canvasPath, `avt_${two}.png`);

  const getAvt = async (uid, outPath) => {
    const res = await axios.get(
      `https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    );
    fs.writeFileSync(outPath, Buffer.from(res.data, "utf-8"));
  };

  await getAvt(one, onePath);
  await getAvt(two, twoPath);

  const avatar1 = await jimp.read(await circleCrop(onePath));
  const avatar2 = await jimp.read(await circleCrop(twoPath));

  base.composite(avatar1.resize(150, 150), 980, 200);
  base.composite(avatar2.resize(150, 150), 140, 200);

  const outputPath = path.join(canvasPath, `pairing_${one}_${two}.png`);
  fs.writeFileSync(outputPath, await base.getBufferAsync("image/png"));

  fs.unlinkSync(onePath);
  fs.unlinkSync(twoPath);

  return outputPath;
}

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, senderID } = event;

  const threadInfo = await api.getThreadInfo(threadID);
  const others = threadInfo.participantIDs.filter((uid) => uid !== senderID);

  if (others.length < 1)
    return api.sendMessage("❌ Group e onno kono member nai pairing er jonno!", threadID, messageID);

  const partnerID = others[Math.floor(Math.random() * others.length)];

  const userInfo = await api.getUserInfo(senderID);
  const partnerInfo = await api.getUserInfo(partnerID);
  const senderName = userInfo[senderID].name;
  const partnerName = partnerInfo[partnerID].name;

  const matchRates = [
    "21%",
    "67%",
    "19%",
    "37%",
    "17%",
    "96%",
    "52%",
    "62%",
    "76%",
    "83%",
    "100%",
    "99%",
    "0%",
    "48%"
  ];
  const matchRate = matchRates[Math.floor(Math.random() * matchRates.length)];

  const imagePath = await makePairImage({ one: senderID, two: partnerID });

  api.sendMessage(
    {
      body: `🥰 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡 𝙋𝙖𝙞𝙧𝙞𝙣𝙜!\n💘 ${senderName} + ${partnerName}\n🎯 𝘾𝙤𝙢𝙥𝙖𝙩𝙞𝙗𝙞𝙡𝙞𝙩𝙮: ${matchRate}\n❤️ Love always finds a way!`,
      attachment: fs.createReadStream(imagePath),
      mentions: [
        { id: senderID, tag: senderName },
        { id: partnerID, tag: partnerName }
      ]
    },
    threadID,
    () => fs.unlinkSync(imagePath),
    messageID
  );
};
