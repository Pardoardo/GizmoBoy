require('dotenv').config();

const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // Necessário para ler o conteúdo das mensagens
    ]
});

client.on(Events.MessageCreate, message => {
    // Ignora mensagens de bots (inclusive ele mesmo)
    if (message.author.bot) return;

    // Verifica se o bot foi mencionado
    if (message.mentions.has(client.user)) {
        message.channel.send(`👋 Hey there, <@${message.author.id}>! \n👁️ It's really good to see you!\n\nMy prefix is` + " `!` and if you need help, just type `!help` and i will give a list of all my commands right alway!");
    }
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Up and running! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
