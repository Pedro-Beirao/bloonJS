const { Events } = require('discord.js');
const bloonUtils = require('../utils/utils.js');
const config = bloonUtils.getConfig();

const activityName = "Intruder";

const evnt = {
    name: Events.PresenceUpdate,
	async execute(oldPresence, newPresence) {
        try{
            if (oldPresence == null) return;
            if (newPresence == null) return;

            const userId        = oldPresence.userId;
            const user          = await oldPresence.guild.members.fetch(userId);

            // Check roles
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
                user.roles.add(config.role_LookingToPlay);
                return;
            }

            if(oldPresence.activities.some(x => x.name === activityName) == false && newPresence.activities.some(x => x.name === activityName) == true){
                //console.log("Player NP");
                user.roles.remove(config.role_LookingToPlay);
                user.roles.add(config.role_NowPlaying);
                return;
            }
        }catch(error){
            console.error(`\nError in nowPlaying.js for user ID ${oldPresence.userId}: ${error}`);
        }
	},
};


module.exports = {
    evnt
}