const { Events } = require('discord.js');
const config = require('../config.js');

const activityName = "Blender";

const evnt = {
    name: Events.PresenceUpdate,
	async execute(oldPresence, newPresence) {

        const userId        = oldPresence.userId;
        const user          = await oldPresence.guild.members.fetch(userId);

        const hasLookingToPlay  = user.roles.cache.some(role => role.id === config.role_LookingToPlay);
        const hasNowPlaying     = user.roles.cache.some(role => role.id === config.role_NowPlaying);

        // If it's neither, then don't do anything.
        if (!hasLookingToPlay && !hasNowPlaying){
            //console.log("Player has no LTP or NW role", hasLookingToPlay, hasNowPlaying);
            return;
        }

        if(oldPresence.activities.some(x => x.name === activityName) == true && newPresence.activities.some(x => x.name === activityName) == false){
            //console.log("Player LTP");
            user.roles.remove(config.role_NowPlaying);
            return;
        }

        if(oldPresence.activities.some(x => x.name === activityName) == false && newPresence.activities.some(x => x.name === activityName) == true){
            //console.log("Player NP");
            user.roles.add(config.role_NowPlaying);
            return;
        }
	},
};


module.exports = {
    evnt
}