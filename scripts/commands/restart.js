module.exports.config = {
	name: "restart",
	version: "7.0.0",
	hasPermssion: 2,
	credits: "ryuko",
	usePrefix: true,
	description: "restart bot system",
	commandCategory: "admin",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`restarting ${global.config.BOTNAME} Bot, please be patient.`, threadID, ()=> process.exit(1));
}
