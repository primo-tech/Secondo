const Discord = require('discord.js');
const prefix = "+"
const client = new Discord.Client();

client.once('ready', () =>
{
	console.log('Ready!')
});

client.on('message', message =>
{
	if(message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS']))
	{
		if(message.content.startsWith(`${prefix}hello`))
		{
			message.channel.send("Greetings Ningen!");
		}

		else if(message.content.startsWith(`${prefix}kick`))
		{
			let user = message.mentions.members.first();
			const general = message.guild.channels.find(ch => ch.name === 'general');

			user.kick().then((user) =>
			{
				general.send(`Sayounara, ${user.displayName}`);
			});
		}
	
		else if(message.content.startsWith(`${prefix}ban`))
		{
			let user = message.mentions.members.first();

			const general = message.guild.channels.find(ch => ch.name === 'general');
			
			user.ban().then((user) =>
			{
				general.send(`Omae Wa Mou, SHINDEIRU!!!!, ${user.displayName} !`);
			});
		}
		
		else if(message.content.startsWith(`${prefix}test`))
        {
            let user = message.mentions.members.first();

            const general = message.guild.channels.find(ch => ch.name === 'general');
                        
            general.send(`Omae Wa Mou, SHINDEIRU!!!!, ${user.displayName} !`);
        }

	}
});

client.login(process.env.BOT_TOKEN);

