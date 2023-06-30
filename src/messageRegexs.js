module.exports = [
	{ regex: /(what|how).*(switch|change|move|swap).*(maps?)/g,														answer: "To change the map ingame make yourself an admin & then use `/changemap mapName` (You must be the admin to do this)." },
	{ regex: /(how|what).*(can)?.*(make|give|become|be) (admini?s?t?r?a?t?o?r?)/g,									answer: "To make yourself an admin use `makeadmin` this only works if you are the original room creator." },
	{ regex: /(is).*(map|list).*(map|list)/g,																		answer: "The Official maps are Riverside, Mountainside, Cliffside, and Oceanside; there are many unofficial maps out there too, check them out at: <https://steamcommunity.com/app/518150/workshop/>" },
	{ regex: /(how).*(report).*(bugs?)/g,																			answer: "You can report bugs at: <https://superbossgames.helprace.com/>" },
	{ regex: /(how|when|what) (long|length|doe?s?).*(ban?n?e?d?s?)/g,												answer: "Temporary bans last about 15 minutes. A timer on the main menu will tell you how much time is left on your temporary ban.  " },
	{ regex: /(cant|can\'t|cannot).*(download).*(maps?)/g,															answer: "If the map is not downloading correctly you may want to restart your game, if problems persist clear your map cache." },
	{ regex: /(what|how).*(tuning)/g,																				answer: "Server Tuning is settings that allow you to change minor or major game mechanics, like speed health & respawns. You can create tuning for your server at: <https://tuning.bloon.info>" },
	{ regex: /(game)?.*(why|is).*(is)?.*(game).*(dead)/g,															answer: "If the servers are empty start your own and ping Looking To Play and have some fun." },
	{ regex: /(cant?n?o?t?|can|how|is).*(name|change).*(name|change)/g,												answer: "Intruder uses your Steam profile username assuming that the characters within the name are supported." },
	{ regex: /(who).*(creato?r?e?d?|mad?k?e).*(bloon)/g,															answer: "Originally developed by DukeOfSussex, Ruby and Botri. Xixo took the reigns after the previous version... popped out of existance 🪦." },
	{ regex: /(what|how).*(is|cant?n?o?t?|do).*(aug)/g,																answer: "The Advanced User Group is a group formed to help serious players run matches, play tournaments, and engage in private community events and activities." },
	{ regex: /(who).*(creato?r?e?d?|mad?k?e).*(intruder)/g,															answer: "Intruder is being developed by Rob Storm and Austin Roush." },
	{ regex: /(how|can) (to|do|you).*(kick)/g,																		answer: "To kick a player, use the button on their player profile by clicking the (i) icon next to their name in the Teams menu." },
	{ regex: /(is|how|can).*(show|change).*(fps)/g,																	answer: "You can show your current FPS on your hud simply by doing `/fps`. You can change your FPS and Vsync settings from the options" },
	{ regex: /(((what).*(is).*(default|normal|original).*(gravity))|((how|can|do).*(change|modify).*(gravity)))/g,	answer: "Gravity by default is at `-9.81`. To change the gravity you do `/gravity #`. ***REMINDER YOU MUST BE AN ADMIN TO DO THIS***" },
	{ regex: /(do|can|how|is|where).*(pay).*(with) (paypal)/g,														answer: "You can use Paypal on Steam!" },
	{ regex: /(what).*(are).*(controls)/g,																			answer: "The controls are: https://i.imgur.com/Bkc97Fp.jpg" },
	{ regex: /(how|can).*(to|do|you|move).*(time|sun) (in) (game|intruder)/g,										answer: "You can change the time of day in game by doing /suntime 15 (24 hour time scale) ***WARNING YOU MUST BE MASTER CLIENT AND ADMIN***" },
	{ regex: /(how|what).*(can)?.*(make|give|become|be).*(master)/g,												answer: "You can set the master client via the player profile cards. ***SIDE NOTE:** this only works if you are the room admin*" },
	{ regex: /((how|can).*(change|remove|disable|(turn.*off?)).*(hud))/g,											answer: "You can turn off your HUD in game by hitting `q+p` at the same time (this odd key combo is so that you don\'t accidentaly turn off your hud in game)" },
	{ regex: /((how|can|what).*(((is|are)|(join|enter)|(leave|remove))) (ltp|looki?n?g? to play))/g,				answer: "Looking to play (or known as LTP) is a role you can give yourself by running the command `.ltp`. If you\'d like to leave the role, simply run the command again. You name will be marked purple once you\'re in." },
	{ regex: /((how|can|what).*(((is|are)|(activate|(start|begin)))).*(lms|last man standing))/g,					answer: "Last Man Standing, aka LMS, is a battle royale style gamemode on Riverside primarily and some custom maps. You can try it on the Riverside LMS map." },
	{ regex: /thank(?:s| you).*bloon/g,																				answer: "You\'re welcome, hooman" },
	{ regex: /(where|how).*(can|do).*(make|create).(custom|).*(maps?)/g,											answer: "Get Started Making Custom Maps: <https://sharklootgilt.superbossgames.com/wiki/index.php?title=IntruderMM/>\r\nMap Maker Resources: <https://docs.google.com/document/d/10Qvao_pA-lM8IFASWaAr6AGlNYG28CJaLqyOd5aUrss/edit?usp=sharing/>\r\nSuperGuide: <https://docs.google.com/document/d/1FXw6tlccdtrtJl_RjpyreXqSjQ9k-f1X9ZDxdOCHtAw/edit/>" },
	{ regex: /(where|how).*(can|do).*(access|show|get|pull).*(console)/g,											answer: "You can access the console within the game at any time by using `\\ + Tab` at the same time. It\'ll open a black box with colored debugging." },
	{ regex: /(my|the|team).*(microphone|mic|team).*(quiet|silent|trouble hearing)/g,								answer: "1) USB Microphone? \r\nhttps://discordapp.com/channels/103933666417217536/306213064934424576/551549500251045907\r\n2) Check microphone volume within Windows (Sometimes this changes)\r\n3) Check microphone values within game settings" },
	{ regex: /(what|how).*(is|join|make|get).*(comp|comp).(player?s?)/g,											answer: "The comp player role is a role reserved for players who play in PUGs (Pop-up games) and Comp matches." }
];