module.exports = {
  config: {
    name: "help",
    version: "3.0",
    author: "Azad Vai",
    countDown: 3,
    role: 0,
    shortDescription: "সাহায্য মেনু",
    longDescription: "বট এর সমস্ত কমান্ড সম্পর্কে তথ্য দেখাবে",
    category: "info",
    guide: { en: "" }
  },

  usePrefix: false, // ✅ Prefix ছাড়া কাজ করবে

  onStart: async function ({ message }) {
    const styledMenu = `
╭──〔 🔰 🎀𝗔𝘇𝗮𝗱 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 𝐈𝐍𝐅𝐎🎀 🔰 〕──╮
│
├ 📁 তথ্য বিভাগ:
│   ├ 🧾 help – সাহায্য মেনু (এইটি)
│   ├ 📜 menu – সমস্ত কমান্ড তালিকা
│   └ 👑 owner – বট নির্মাতার তথ্য
│
├ ⚙️ সিস্টেম:
│   ├ 🛰 ping – বট চালু আছে কিনা দেখুন
│   └ ⏱ uptime – বট অন থাকার সময়কাল
│
├ 🎵 বিনোদন:
│   ├ 🎙 voice – র‍্যান্ডম ভয়েস
│   ├ 🤖 emoji – ইমোজি ভয়েস
│   └ 📖 kobita – বাংলা কবিতা
│
├ 📸 মিডিয়া:
│   ├ 🎬 tiktok – TikTok ভিডিও ডাউনলোড
│   └ 🖼 remini – ছবি HD করুন
│
╰───────────────╯

✅ শুধু কমান্ডের নাম লিখলেই হবে!
⚠️ Prefix দরকার নেই!
📌 উদাহরণ: help, voice, ping, owner
    `;

    message.reply(styledMenu);
  }
};
