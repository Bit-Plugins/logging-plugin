const { EmbedBuilder } = require('discord.js');
const { embedColours, botIDs } = require('../config.json');



module.exports = {
	name: 'emojiDelete',
	execute(emoji) {
        const client = emoji.client
		const embed = new EmbedBuilder()
			.setColor(embedColours.negative)
			.setDescription("An Emoji named "+emoji.name+" was deleted.")
			.setFooter({ text: 'Emoji ID '+emoji.id })
			.setTimestamp();
		client.channels.cache.get(botIDs.logs).send({ embeds: [embed] });
		return;
	},
};