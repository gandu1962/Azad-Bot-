module.exports = {
  config: {
    name: "kobita",
    aliases: ["poem", "poetry", "কবিতা"],
    version: "1.0",
    author: "Azad Vai",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Send a random Bengali poem"
    },
    longDescription: {
      en: "Sends a beautiful short Bengali kobita when requested"
    },
    category: "fun",
    guide: {
      en: "Type: kobita or কবিতা to get a beautiful Bengali poem"
    }
  },

  onStart: async function ({ message }) {
    const kobitaList = [
      "🌸 ‘কেন তুমি ফিরে চাও,\nস্মৃতির পাতায়?\nযেখানে শুধু ব্যথা,\nনেই তো প্রাপ্তির ছায়া।’",

      "🍃 ‘তুমি যদি আসো,\nএকটি শ্রাবণের দুপুরে,\nআমি অপেক্ষায় থাকবো,\nভেজা বালিশে স্বপ্ন আঁকবো।’",

      "🌙 ‘রাত নিঝুম, চাঁদ একা,\nতুমি পাশে নেই বলে,\nঅলক্ষ্যে জমে ওঠে,\nএকটা নিরব কাব্যবলে।’",

      "🕊️ ‘যদি ভালোবাসো গোপনে,\nএকটু হেসে দিও প্রকাশে,\nচোখে চোখ রাখলে বুঝি,\nআবেগ ছুঁয়ে যায় নিঃশ্বাসে।’",

      "🌼 ‘ভালোবাসা মানে কি শুধু বলা?\nনীরব চোখেও তো লেখা থাকে অনেক কথা।’",

      "🖤 ‘চাই না অনেক কিছু,\nশুধু তুমি থাকো পাশে,\nকবিতার মত মিশে যাও,\nআমার প্রতিটি শ্বাসে।’",

      "💫 ‘তুমি যদি কবিতা হও,\nআমি হবো পাঠক চিরকাল,\nপ্রতিদিন তোমায় পড়ে,\nহৃদয়ে আঁকি ভালবাসার গাথা।’"
    ];

    const randomIndex = Math.floor(Math.random() * kobitaList.length);
    const selectedKobita = kobitaList[randomIndex];

    await message.reply(`📝 কবিতা:\n\n${selectedKobita}`);
  }
};
