const { EmbedBuilder } = require('discord.js');
const { embedColours, botIDs } = require('../config.json');



module.exports = {
	name: 'inviteCreate',
	execute(invite) {
        const client = invite.client

		var currentDate = Date.now()
		currentDate = currentDate/1000
		var inviteEnd

		if(invite.maxAge === 0) {
		} else {
			inviteEnd = Math.floor(currentDate+invite.maxAge)
		}
		var inviter
		
		if(invite.inviter.displayName) {
		    inviter = invite.inviter.displayName
		} else if(invite.inviter.username) {
		    inviter = invite.inviter.username
		} else {
		    inviter = ""
		}

		const embed = new EmbedBuilder()
			.setColor(embedColours.positive)
			if(invite.maxAge === 0) {
				embed.setDescription("An infinite invite was created by "+inviter+", and has "+invite.maxUses+" max uses\nhttps://discord.gg/"+invite.code);
			} else {
				embed.setDescription("An invite was created by "+inviter+", it will end <t:"+inviteEnd+":R> and has "+invite.maxUses+" max uses\nhttps://discord.gg/"+invite.code);
			}
			embed.setTimestamp();
		client.channels.cache.get(botIDs.logs).send({ embeds: [embed] });
		return;
	},
};