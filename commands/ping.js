const { EmbedBuilder } = require('discord.js');
const config = require("../config");
module.exports = {
    name: "ping",
    description: "It helps you to get information about the speed of the bot.",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction) => {

        const start = Date.now();
        const embed = new EmbedBuilder()
            .setColor('007fff')
            .setTitle(client.user.username + " - Pong!")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields([
                { name: `Message Ping`, value: `\`${Date.now() - start}ms\` 🛰️` },
                { name: `Message Latency`, value: `\`${Date.now() - start}ms\` 🛰️` },
                { name: `API Latency`, value: `\`${Math.round(client.ws.ping)}ms\` 🛰️` }
            ])
            .setTimestamp()
            .setFooter({ text: config.footer })
        interaction.reply({ embeds: [embed] }).catch(e => { });

    },
};
