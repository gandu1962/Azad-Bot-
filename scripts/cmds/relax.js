module.exports = {
  config: {
    name: "relax",
    aliases: ["heal", "calm", "mental", "monkharap"],
    version: "1.0",
    author: "Azad Vai",
    countDown: 3,
    role: 0,
    shortDescription: "🕊️ মন ভালো করার জাদু",
    longDescription: "মন খারাপ বা হতাশ লাগলে ব্যবহার করো এই কমান্ডটি",
    category: "🫂 Therapy",
    guide: {
      en: "{pn} — মন ভালো করার জন্য শান্ত কিছু কথা"
    }
  },

  onStart: async function ({ api, event }) {
    const relaxQuotes = [
      "🕊️ ভাই মন খারাপ? একটু চোখ বন্ধ করো, গভীর শ্বাস নাও... তুমি একা না।",
      "🌧️ আজকে কষ্ট হচ্ছে, কিন্তু কালকে হয়তো তুমি হাসবে এই কষ্ট মনে করে।",
      "💌 কিছু না বললেও বুঝি ভাই, ভালোবাসা রইলো। একটা virtual hug নিও 🤗",
      "🌸 জীবনটা অনেক বড় ভাই, আজকের এই দুঃখ শেষ না... আবার রোদ উঠবে।",
      "📦 মনের ভেতর জমে থাকা কষ্ট গুলো আস্তে আস্তে ফেলে দাও... তুই deserve করিস শান্তি।",
      "🍃 কখনো নিজেকে ছোট ভাবিস না ভাই, তুই অনেক special — একটা ভুল বা মানুষ তোর value কমায় না।",
      "📖 মনে রাখিস — দুঃখ আসবে, কিন্তু সেটা তোর জার্নির full stop না... শুধু একটা comma।",
      "🧠 কষ্টে থাকলে ঘুমাও, গান শোনো, কারো সাথে কথা বলো... আর চাইলে আবার ,relax লিখে আমাকে ডাকো।",
      "💫 বিশ্বাস করো ভাই, তুমি হারিয়ে যাওনি — তুমি নিজেকে খুঁজতেছো মাত্র।",
      "🫂 আমি জানি কষ্টের ওজন অনেক, কিন্তু তুই বহন করতে পারবি — কারণ তুই শক্তিশালী।"
    ];

    const randomMessage = relaxQuotes[Math.floor(Math.random() * relaxQuotes.length)];

    api.sendMessage(randomMessage, event.threadID, event.messageID);
  }
};
