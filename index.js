// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// The Collection class extends JavaScript's native Map class,
// and includes more extensive, useful functionality. 
// Collection is used to store and efficiently retrieve commands
// for execution.
client.commands = new Collection();

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
console.log('token')