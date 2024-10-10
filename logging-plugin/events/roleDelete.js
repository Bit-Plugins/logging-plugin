const { EmbedBuilder } = require('discord.js');
const { embedColours, botIDs, logs } = require('../config.json');

module.exports = {
	name: 'roleDelete',
	execute(role) {
		const client = role.client
		if(logs.role.delete === false) {
			return;
		}

		if(botIDs[role.guild.id].logs) {
			const embed = new EmbedBuilder()
				.setDescription("A role named "+role.name+" was deleted.")
				if(role.color) {
					embed.setColor(role.color)
				} else {
					embed.setColor(embedColours.negative)
				}
				embed.setFooter({ text: 'Role ID '+ role.id })
				embed.setTimestamp();
			client.channels.cache.get(botIDs[role.guild.id].logs).send({ embeds: [embed] })
			return;
		}
	}
}