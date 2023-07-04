const { SlashCommandBuilder } = require('discord.js')
const bloonUtils = require('../utils/utils.js');
const config = require('../config.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servers')
		.setDescription(`Provides information about Intruder's servers.`),
	async execute(interaction) {
		try{
			if (interaction.channel.id != config.bloonCommandsChannel){
				await interaction.reply({ content: 'This command can only be used in the Bloon Commands Channel!', ephemeral: true });
				return;
			}
	
			bloonUtils.getHHTPResult("https://api.intruderfps.com/rooms")
			.then(async rooms => {
				rooms.data.sort(function(a, b){
					return b.agentCount - a.agentCount;
				});
	
				const roomEmbed = bloonUtils.createRoomEmbed(rooms.data);
				await interaction.reply({ embeds: [roomEmbed]})
			}).catch(error => {
				//message.reply("It's a work in progress, ok?")
				interaction.reply({ content: "An error has occurred, sorry 🙈", ephemeral: true}); // React with error
				console.error("Error loading servers "+ error)
			});
		}catch(error){
			console.error("\nError in Servers.js: " + error);
		}
	},
};