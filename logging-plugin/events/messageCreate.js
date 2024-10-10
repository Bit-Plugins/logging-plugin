const fs = require('fs');
const { EmbedBuilder } = require('discord.js');
const { embedColours, botIDs, logs } = require('../config.json');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        const client = message.client
        const user = message.author.user
        const member = message.author
        const guild = message.guild

        if(logs.member.verified === false) {
			return;
		}

        if(botIDs[message.guild.id].logs) {
            if(message.type === 'GUILD_MEMBER_JOIN') {
                const embed = new EmbedBuilder()
                    .setAuthor("Member Verified | "+message.member.user.username, message.member.user.avatarURL())
                    .setColor(embedColours.positive)
                    .setTimestamp()
                    .setFooter('User ID '+ message.member.id)
                    .setTimestamp();
                client.channels.cache.get(botIDs[message.guild.id].logs).send({ embeds: [embed] });
            }
        }
	},
};