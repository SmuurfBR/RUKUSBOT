const { ShardingManager } = require('discord.js');
const manager = new ShardingManager(`./index.js`, { totalShards: 2});

manager.spawn();

manager.on('launch', shard => console.log(`Shard ${shard.id} iniciada com sucesso!`));