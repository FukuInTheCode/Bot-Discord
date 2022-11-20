const { executionAsyncResource } = require("async_hooks");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Find out!'),

    async execute(interaction) {
        await interaction.reply('pong!')
    }
}