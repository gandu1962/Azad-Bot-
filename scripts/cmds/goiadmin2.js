module.exports = {
	config: {
		name: "goiadmin",
		author: "NIsAN",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61557361836577") {
		var aid = ["61557361836577"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["Azad বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো mention নাহ দিয়া সিংগেল azad রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না Az ad প্রচুর বিজি 🥵🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
