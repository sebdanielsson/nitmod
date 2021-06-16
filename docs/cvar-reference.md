---
sidebar_position: 3
---

# Cvar Reference

#### g_lms_teamForceBalance
Controls whether the game will prevent new players from joining the team with more players than the other
0 : Disable
1 : Enable
Default: 1

#### g_lms_roundlimit
sets the maximum number of rounds for a single matchup between teams. A team is considered to win a match when more than 50% of num rounds are won.
Default: 3

#### g_lms_matchlimit
sets the maximum number of matches to play before moving on to the next map in rotation.
Default: 2

#### g_lms_lockTeams
Controls locked teams during match play. When enabled, the teams are locked once match play begins and new players may not join.
0 : Disable
1 : Enable
Default: 0

#### g_lms_followTeamOnly
Controls same-team spectator restrictios
0 : Disable
1 : Enable
Default: 1

#### g_teamChangeKills
Changing team adds a death to the player stats
0 : Disable
1 : Enable
Default: 1

#### g_logAdmin
Name of the file where admin commands attempts will be logged.
Default: ""

#### g_mapConfigs
allows you to execute a custom config file for each map. When set, it specifies the name of the folder inside your server's nitmod directory. The config file for a map has to be named the same as the map with the extension .cfg, for instance oasis.cfg. You should also create a default.cfg file which will be read before the map-specific config files.
Default: ""

#### g_defaultMute
Sets the default time for mute.
Default: 3600

#### g_moverScale
Multiply the speed of movers (e.g. tanks) by float.
Default: 1.0

#### g_maxWarp
Controls the amount of "warping" that players with high packet loss can do. The [integer] is the number of server frames that you allow a player to miss before their next movement is put in check. A server frame is 50ms on a typical server (sv_fps set to 20). This means that if you set g_maxWarp to 5 you wont allow players to warp from point A to point B if that distance takes an normal player 1/4 of a second to travel. Setting this to 1 is a good way to drive off just about everyone from your server. As far as I can tell, 1000ms is allowed by default in the game, so setting this to any value higher than 39 should have no effect if sv_fps is set to 10.
Default: 4

#### g_mapScriptDirectory
Changes directory for custom mapscripts. Similar to ETPro s b_mapScriptsDirectory.
Default: ""

#### g_campaignFile
Similar to ETPro s b_campaignFile. If you set this to the name of a file in your fs_path it will be interpreted as a .campaign script and all other .campaign scripts in your pk3 files will be ignored. This is useful for making custom campaigns since you don t need to offer a pk3 file containing a custom .campaign script for all clients to download. However, if the client has not downloaded this .campaign file in a pk3, they will not see information about the campaign. Such information includes: will not display in the VOTE -> MAP list map locations will not draw on the map of Europe. campaign description will not draw in the right panel total number of maps and current maps order in the campaign will not be shown in the intermission screens. Also, even though the built-in campaigns cmpgn_centraleurope and cmpgn_northafrica will not be valid, they will still appear in the client s VOTE -> MAP menu. If a vote for one of them passes, nothing will happen. Setting this to "" disables it.
Default: ""

#### g_censor
List of the words that have to be censored in the chat
Default: ""

#### g_censorNames
List of the words that have to bo censored from player names.
Default: ""

#### g_censorPenalty
Bitflag to control the penalty for a player saying a censored word (see g_censor).
1 : Gib the player.
2 : Kick players with names containing words in g_censorNames.
4 : Kill the player, but don t gib (flag 1 take precedence on this).
8 : Mute for g_censorMuteTime seconds.
16 : Lose 10 XP.
32 : Burn.
64 : Poison.
Default: 1

#### g_censorMuteTime
If g_censorPenalty contains flag 8, the censored player will be automuted for g_censorMuteTime seconds
Default: 0

#### g_autoTempBan
If set, clients kicked for the specified reasons will be tempbanned for g_autoTempBanTime seconds
1 : Tempban a player when reaching g_teamDamageRestriction value
2 : Tempban when using !kick command to kick a player. (A normal !kick kicks for 120 seconds)
Default: 0

#### g_autoTempBanTime
Auto Tempban duration
Default: 1800

#### g_skipCorrection
Set this to 1 to enable Neil Toronto s unlagged2 skip correction. This will smooth out the movement of players with high packet loss (to a degree).
0 : Disable
1 : Enable
Default: 1

#### g_teamDamageRestriction
If higher than 0, anybody that has this percentage of hits inflicted on a teammate will automatically be kicked. A minimum of g_minhits hits total is required before this is calculated. Client can check their current stats by typing /damage in the console.
Default: 0
Note: "immunity" or "all" admin flag overwrites this setting.

#### g_minHits
Minimum damaging hits required before calculating if player has reached g_teamDamageRestriction
Default: 6
Note: Medics get -2 hits for every revive


skill_soldier
skill_medic
skill_engineer
skill_fieldops
skill_covertops
skill_battlesense
skill_lightweapons
Allow customization of the experience points necessary to go up in ranks.
These settings consist of five space-separated integers indicating the number of XP required in a specific skill, to reach the next rank.
A string such as "3 10 10 10 10" indicates that 3 points are required to go up the first rank, and the next four ranks are granted when
the players reaches 10 points in this skill.
You can also grant levels upon connection by using a value like "0 0 0 100 150".
This would mean that the first three ranks would be granted upon connection, the 4th and 5th ranks would be granted at 140 and 200 points.
It is also possible to completely disable a rank for a certain skill by using "-1".
For example, if you use the value "20 50 90 -1 200", rank 4 and rewards that come with it will be disabled,
players will jump from rank 3 to rank 5 when they reach 200 points for the specific skill, without ever reaching the 4th rank.
Default: 20 50 90 140 200


#### g_maxLevelLightWeapons
#### g_maxLevelBattleSense
#### g_maxLevelSoldier
#### g_maxLevelMedic
#### g_maxLevelEngineer
#### g_maxLevelFieldOp
#### g_maxLevelCovertOp
Cvars to cap the max level a player can gain in a skill.
N!tmod has 5 levels in each skill.
If you don't like the extra skill rewards, you can disable it using these cvars
For exemple, set all these to 5 and you'll never gain a skill above 4.
Set them all to 0 to disable skills all together.
Default: 6
Note: Level 0 is also counted as a level, so if you want to cap a level to level 5, you have to set g_maxLevel**skill** to 6.

#### g_weaponItems
Customize how weapons are dropped upon limbo death
0 : Drop no weapons upon limbo death.
1 : Drop primary weapon upon limbo death (default ET).
2 : Drop Binoculars if player has them.
4 : Extra clips are included when you pickup a dropped weapon.
8 : Pick up ammo you need from dropped weapons, but leave the gun and what ammo is left on the ground.
16 : Do not pickup dropped weapons that are empty, or if you have full ammo for that particular weapon.
32 : Players will drop ONE knife upon limbo death if carrying more than one.
Default: 1

#### g_maxMapsVotedFor
Define how many maps are presented to users for voting upon during intermission
Default: 6
Note: Only available when g_gametype is set to 6 (Map Voting)

#### g_minMapAge
Define how long (in map number) a map is ineligible for voting, after it is played
Default: 3
Note: Only available when g_gametype is set to 6 (Map Voting)

#### g_mapVoteFlags
Controls how map voting works
1 : Changes the tie breaker so that the map not played in the longest wins
2 : Intermission doesn't end until g_intermissionReadyPercent people have voted. If there are no players connected to the server, intermission will end at the timeout.
>> WARNING: This means that if there are spectators connected and not voting, the next map will not load until those spectators either vote, disconnect, or get kicked by the system)
4 : Multi vote: Allows everybody to vote for 3 maps instead of one, first choice map gets 3 votes, second choice gets 2, third choice gets one
8 : Don't randomize the maps, so they will always appear in the same order
16 : A passed nextmap vote (when g_gametype is 6) will start the intermission and lets players vote which map should be played next.
Default: 0
Note: Only available when g_gametype is set to 6 (Map Voting)

#### g_excludedMaps
Contains list of map to be exclude from the map voting list.
The format is ":map1:map2:map3:", where mapX is the .bsp name.
Default: ""
Note: Each mapname must be fully surrounded by ":" otherwise the map will not be excluded.

#### g_resetXPMapCount
Number of maps need to be played before player XP is reset.
Default: 0

#### g_weaponScriptsDir
Defines the directory that weapon scripts will be placed to edit how weapons work
Default: ""

#### g_missileGravity
Sets gravity on missile.This is not a bitflag
0 : Disable
1 : Strong effect
2 : Realistic effect
Default: 0

#### g_missileSpeed
the speed a panzer/bazooka missile travels at. Set to 0 or 2500 to enable default speed. Values over 300 are ignored if Guided Rockets are enabled.
Default: 0

#### g_missileHealth
Controls the amount of health a panzer/bazooka missile has. Set this to 0 to make missiles indestructible.
Default: 5

#### g_mortarBBox
Enablethe use of a bounding box (hitbox) around mortar shells, to prevent them from going through small windows and other narrow gaps.
0 : Disable
1 : Enable
Default: 0

#### g_fixedphysics
Controls the physics corrections related to player frame rates. Permits to avoid rounding errors. g_fixedPhysicsFPS controls the FPS the added rounding error emulates.
0 : Disable
1 : Enable
Default: 0

#### g_fixedphysicsfps
Sets the emulated FPS value when calculating the artificial rounding error used in g_fixedPhysics. The magic numbers to use for this setting are 76, 125, and 333, however, 125 works seems be the most used value
Default: 125

#### g_floodprotect
Toggle flood protecting.
Flooding means that a client is sending too many messages to the server (vsays, callvotes, etc...).
0 : Disable
1 : Enable
Default: 1
Note: If you enable g_floodprotect, make sure you set a value for g_floodthreshold

#### g_floodthreshold
Set the number of messages per second before ignoring the client's messages.
Only in effect when g_floodprotect is turned on.
Default: 6

#### g_floodWait
Set the minimum time (in ms) between two messages when g_floodprotect is enabled.
1000 ms copies sv_floodprotect (forced to 0 in N!tmod) behaviour.'
Default: 1000
Note: Should be > 500 in order to keep a public server playable.

sv_cheats
Toggle ETMain cheats (god, give, nofatigue, noclip, notarget, revive) and allow modifying cheat protected cvars.
0 : Disable
1 : Enable
Default: 0

#### g_gametype
Sets the gametype that will be played on your server.
2 : Objective
3 : Stopwatch
4 : Campaign
5 : Last Man Standing
6 : Map voting (Thanks to ETPub Team)
7 : Team Death Match
8 : Death Match - Free For All
Default: 4

#### g_TDMScore
If Team Death Match (g_gametype 7) is enabled, this sets the score that a team has to reach to win the round.
Default: 500

#### g_TDMObjBonus
If set higher than 0, defines how many Bonus Points that will be given to the team that completes the final objective.
Default: 100

#### g_TDMOptions
Bitflag to control some options specific to Team Death Match gametype.
1 : Team score will be inscreased by 1 point per kill. Don't forget to review g_TDMObjBonus and g_TDMScore values if you are using this option.
2 : Disable selfkill (/kill) during TDM
4 : Disable Artillery Support during TDM
8 : Enable intermission map voting
16 : Round will end when timelimit is reached
Default: 0

#### g_DMFragLimit
Set the Death Match gametype Frag Limit (g_gametype 8). Once a player reaches this number of kills, he wins the round.
Default: 25

#### g_DMOptions
Bitflag to control some options specific to Death Match gametype
1 : Gives a maximum of 20HP when killing someone
2 : HP Regenerates (at normal rate) for every classes
4 : Disable selfkill (/kill) during DM
8 : Shoucaster status will be granted to clients when connect
16 : Enable "Call of Duty" like "Martyrdom" - Clients drop a grenade when they get killed. The grenade timer is set to 2.5 seconds
32 : Disable Artillery Support during DM
64 : Disable Health Cabinets
128 : Disable Ammo Cabinets
256 : Allow Landmines
512 : Allow Poison Gas Landmines
1024 : Allow Poison Gas Canisters
2048 : Allow Tripmines
4096 : Allow satchel charges
8192 : Allow Bomb
16384 : Enable intermission map voting
Default: 0

sv_maxclients
Maximum number of players allowed on the server (Hard limit: 64)
Default: 20

#### g_password
Server password
If set, server will be private and players will need to know the password to connect
Leave empty or set to "none" to disable
Default: ""

sv_privateClients
Number of private slots on the server (See sv_privatepassword)
Default: 0

sv_privatepassword
Password for private slots (See sv_privateClients)
Default: ""

server_motd0
Server MOTD line #1.
Default: "^7N^1!^7tmod"

server_motd1
Server MOTD line #2.
Default: ""

server_motd2
Server MOTD line #3.
Default: ""

server_motd3
Server MOTD line #4.
Default: ""

server_motd4
Server MOTD line #5.
Default: ""

server_motd5
Server MOTD line #6.
Default: ""

server_motd6
Server MOTD line #7.
Default: ""

refereePassword
Sets the server's referee password. Players who know this password can get referee status using /ref *password* in their client console.
Default: ""

#### g_teamForceBalance
If enabled, the game will not allow a team to have more than 1 player more than the other team.
This has no effect on players with the "balanceimmunity" or "all" admin flag.
0 : Disable
1 : Enable
Default: 0
Note: This option will neither perfom any auto-team-balancing nor move any players to other teams.

#### g_warmup
Warmup duration in seconds
Default: 60

#### g_doWarmup
Toggle Warmup. If enabled, waits for match_minplayers players before starting warmup countdown.
0 : Disable
1 : Enable
Default: 1

#### g_altStopwatchMode
Toggle Alternative Stopwatch Gametype. If enabled, players will swap teams after each round.
0 : Disable
1 : Enable
Default: 0

#### g_noTeamSwitching
If enabled, players can't switch teams when the match is in progress, they will have to wait until warmup to switch.
0 : Disable
1 : Enable
Default: 0

#### g_userAlliedRespawnTime
Allied team respawn time in milliseconds
Default: 0

#### g_userAxisRespawnTime
Allied team respawn time in milliseconds
Default: 0

#### g_userTimeLimit
Allows overriding default map time limit with your own value.
Default: 0
Note: This cvar has no effect during "Stopwatch" gametype, and can't be set to lower than 3 if running "Last Man Standing" gametype.

#### g_log
General log file name
Default: ""

#### g_logSync
Synchronize log files
Default: 0

#### g_logCrash
Log file name when server crash
Default: crash.log

n_LogCurrentTime
If enabled, real time will be printed in logs instead of server uptime.
Default: 0

#### g_banIPs
Stores IP and IP masks for g_filterban
Default: ""

#### g_filterBan
Filter connect packets IP's
You can manage IP Filter list with these commands (rcon):
addip 'ip' :
Add an IP address to the list. The ip address is specified in dot format, and you can use '*' to match any value
so you can specify an entire class C network with "addip 192.246.40.*"
removeip 'ip' :
Remove an IP address from the list. It will only remove an address specified exactly the same way. You cannot addip a subnet, then removeip a single host.
listip
Prints the current list of filters.
0 : Only IP addresses matching the current list are allowed to join.
1 : IP addresses matching the current list are not allowed to join.
Default: 1
Note: IP List is stored in g_banIPs cvar, the size of the cvar string buffer is limiting the banning to around 20 masks.

#### g_speed
Overall player speed
Default: 320

#### g_gravity
Defines gravity ammount
Server sets this value to 800 (default) when map restarts
Default: 800
Note: N!tmod uses "Real Gravity", which means this value will have effect on every non-static objects in the world.

#### g_knockback
Knockback value when receiving damage
Default: 1000

#### g_forcerespawn
If higher than 0, sets the delay in seconds before a wounded player will be forced to tapout
Default: 0

#### g_debugBullets
BitFlag to control debug system trace.
0 : Disable
1 : Show bullet trace
Default: 0

#### g_complaintlimit
Maximum number of complaints against a player before he gets kicked from the server
Default: 6

#### g_ipcomplaintlimit
Sets the maximum number of unique complaints a player (by IP address) may have filed against them before they are automatically kicked
Default: 3

#### g_disableComplaints
Bitflag to disable friendly fire complaints for certain weapons
1 : Complaints disabled for friendly Landmine kills
2 : Complaints disabled for friendly Airstrike kills
4 : Complaints disabled for friendly Mortar kills
8 : Complaints disabled for friendly Tripmines kills
Default: 0

#### g_filtercams
Removes players from camera views. If enabled, players will not be displayed on limbo objective camera
0 : Disable
1 : Enable
Default: 0

#### g_maxlives
If enabled, this sets the maximum number of respawn allowed per round
Set to 0 to disable
Default: 0
Note: g_alliedmaxlives and g_axismaxlives take precedence on this cvar.

#### g_maxlivesRespawnPenalty
Number of respawns a player has to miss after he has ran out of lives (see g_maxlives, g_axismaxlives, g_alliedmaxlives) before respawning again.
Default: 0

#### g_alliedmaxlives
If enabled, this sets the maximum number of respawn allowed per round for allied team players
Set to 0 to disable
Default: 0
Note: Takes precedence on g_maxlives.

#### g_axismaxlives
If enabled, this sets the maximum number of respawn allowed per round for axis team players
Set to 0 to disable
Default: 0
Note: Takes precedence on g_maxlives.

#### g_enforcemaxlives
Toggle "Max Lives Enforcement Temp Ban."
Players will be temporarily banned from the server until next round starts, to make sure they don't reconnect to get new lives.
0 : Disable
1 : Enable
Default: 1

#### g_voiceChatsAllowed
Maximum number of voicechats allowed before the voicechat flood protection is triggered.
Default: 4
Note: This has no effect on players with the "nocensorflood" or "all" admin flag.

#### g_fastres
If enabled, player will be able to move instantly after being revived, and his invulnerability will be reduced to 1 second instead of 3.
0 : Disable
1 : Enable
Default: 0

pmove_fixed
Control the use of pmove_msecs for frame computation
0 : Disable
1 : Enable
Default: 0

pmove_msec
Adjust the frame time (in ms) used for frame calculation.
Default: 8

#### g_antilag
Toggle ETPro Antilag.
0 : Disable
1 : Enable
Debug flags (Both can be used at the same time):
2 : (FLAG)Show backward reconciled player hitboxes whenever an antilagged trace is done by the server
4 : Show current player hitboxes whenever a bullet weapon is fired
Default: 1
Note: If debug options are enabled, a lot of entities will be used and it will most likely cause lot of lags on the server, use with caution!

#### g_inactivity
Delay in seconds before sending an inactive player (not moving/shooting) to spectators.
If enabled, a warning message is sent to the inactive player after half of the specified time.
See also g_spectatorInactivity and g_inactivityOptions.
Default: 0

#### g_spectatorInactivity
Delay in seconds before kicking a spectator for inactivity.
If enabled, a warning message is sent to the inactive spectator after half of the specified time.
See also g_inactivity and g_inactivityOptions.
Default: 0
Note: Players with the "inactivity" admin flag will NEVER be kicked

#### g_inactivityOptions
Bitflag to set various inactivity options. (See g_spectatorInactivity and g_inactivity)
1 : Do not drop spectators if they are following a player
2 : Don't wait for a full server to drop inactive spectators
4 : Do not move players with the "inactivity" admin flag to spectators after g_inactivity
Default: 0
Note: Players with the "inactivity" admin flag will NEVER be kicked

match_latejoin
Allowing players to join a match in progress
0 : Disable
1 : Enable
Default: 1

match_minplayers
Sets the minimum number of players required for match to begin.
Default: 4

match_mutespecs
Mutes the spectators.
0 : Disable
1 : Enable
Default: 0

match_readypercent
Sets the percentage of players required to be ready
Default: 100

match_timeoutcount
Sets the maximum number of times non-referees can pause the match.
Default: 3

match_timeoutlength
Timeout/pauses duration in seconds
Default: 180
Note: Set to -1 for infinite timeout (match will only be resumed when someone unpauses it)

match_warmupDamage
Warmup damage options
0 : No damage during warmup
1 : Can only damage enemies
2 : Can damage anyone
Default: 1

#### g_medicChargeTime
Time, in milliseconds, it takes for Medic class charge bar to refill
Default: 45000

#### g_engineerChargeTime
Time, in milliseconds, it takes for Engineer class charge bar to refill
Default: 30000

#### g_LTChargeTime
Time, in milliseconds, it takes for Field Ops class charge bar to refill
Default: 40000

#### g_soldierChargeTime
Time, in milliseconds, it takes for Soldier class charge bar to refill
Default: 20000

#### g_covertopsChargeTime
Time, in milliseconds, it takes for Covert Ops class charge bar to refill
Default: 30000

#### g_heavyWeaponRestriction
For each heavy weapon, this defines the percentage of players, per team, who can use it, based on the total number of player in a team.
Default: 100

team_panzerRestriction
Minimum percentage of connected players needed to enable Panzerfaust.
If set to 10 on a 20 player slot server up to 2 players can use panzer.
Set to 0 to disable
Default: 0
Note: If enabled, takes precedence over "team_maxPanzers" cvar.

team_maxPanzers
Maximum number of players per team allowed to use Panzerfaust
Set to -1 to disable restriction
Default: -1
Note: "team_panzerRestriction" takes precedence over this one.

team_maxMG42s
Maximum number of players per team allowed to use Mobile MG42
Set to -1 to disable restriction
Default: -1

team_maxFlamers
Maximum number of players per team allowed to use Flamethrower
Set to -1 to disable restriction
Default: -1

team_maxMortars
Maximum number of players per team allowed to use Mortar
Set to -1 to disable restriction
Default: -1

team_maxriflegrenades
Maximum number of players per team allowed to use K43/Garand's grenade lanucher
Set to -1 to disable restriction
Default: -1

team_maxTripmines
Maximum number of tripmines per team
This value has to be set. A value of "0" will not allow any tripmine to be set!
Default: 5

team_maxLandmines
Maximum number of landmines per team
This value has to be set. A value of "0" will not allow any landmine to be set!
Default: 10

team_airstrikeTime
Minimum delay, in seconds, between airstrikes per team.
Default: 10

team_artyTime
Minimum delay, in seconds, between artillery strikes (Firing For Effect) per team.
Default: 10

team_maxSoldiers
Maximum number of Soldiers allowed per team
Set to -1 to disable restriction
Default: -1

team_maxMedics
Maximum number of Medics allowed per team
Set to -1 to disable restriction
Default: -1

team_maxEngineers
Maximum number of Engineers allowed per team
Set to -1 to disable restriction
Default: -1

team_maxFieldops
Maximum number of FieldOps allowed per team
Set to -1 to disable restriction
Default: -1

team_maxCovertops
Maximum number of CovertOps allowed per team
Set to -1 to disable restriction
Default: -1

team_maxplayers
Maximum number of players allowed per team
Set to 0 to disable restriction
Default: 0

team_nocontrols
Disallow to use of team commands
0 : Disable
1 : Enable
Default: 1

#### g_landminetimeout
If enabled, a player's landmines will be removed when he disconnects or joins another team.
0 : Disable
1 : Enable
Default: 1

vote_allow_comp
Toggle "Competition Settings" voting (requires default_comp.cfg on the server)
0 : Disable
1 : Enable
Default: 1

vote_allow_gametype
Toggle gametype voting
0 : Disable
1 : Enable
Default: 1

vote_allow_kick
Toggle voting to kick players
0 : Disable
1 : Enable
Default: 1

vote_allow_map
Toggle map voting
0 : Disable
1 : Enable
Default: 1

vote_allow_matchreset
Toggle match reset voting
0 : Disable
1 : Enable
Default: 1

vote_allow_mutespecs
Toggle voting to mute spectators
0 : Disable
1 : Enable
Default: 1

vote_allow_nextmap
Toggle nextmap voting
0 : Disable
1 : Enable
Default: 1

vote_allow_pub
Toggle "Public Settings" voting (requires default_pub.cfg on the server)
0 : Disable
1 : Enable
Default: 1

vote_allow_referee
Toggle voring to referee players
0 : Disable
1 : Enable
Default: 0

vote_allow_shuffleteams
Toggle voting to shuffle teams & restart match
0 : Disable
1 : Enable
Default: 1

vote_allow_shuffleteams_norestart
Toggle voting to shuffle teams WITHOUT restarting match
0 : Disable
1 : Enable
Default: 1

vote_allow_swapteams
Toggle voting to swap teams WITHOUT restarting match
0 : Disable
1 : Enable
Default: 1

vote_allow_swapteamsrestart
Toggle voting to swap teams & restart match
0 : Disable
1 : Enable
Default: 1

vote_allow_friendlyfire
Toggle Friendly Fire voting
0 : Disable
1 : Enable
Default: 1

vote_allow_timelimit
Toggle voting to modify timelimit
0 : Disable
1 : Enable
Default: 0

vote_allow_warmupdamage
Toggle voting to modify warmup damage settings
0 : Disable
1 : Enable
Default: 1

vote_allow_antilag
Toggle voting to modify antilag status
0 : Disable
1 : Enable
Default: 1

vote_allow_balancedteams
Toggle voting to modify balanced teams status
0 : Disable
1 : Enable
Default: 1

vote_allow_muting
Toggle voting to mute players
0 : Disable
1 : Enable
Default: 1

vote_allow_surrender
Toggle voting to surrender
0 : Disable
1 : Enable
Default: 1

vote_allow_restartcampaign
Toggle campaing restart voting
0 : Disable
1 : Enable
Default: 1

vote_allow_nextcampaign
Toggle next campaign voting
0 : Disable
1 : Enable
Default: 1

vote_allow_poll
Toggle Poll voting
0 : Disable
1 : Enable
Default: 1

vote_allow_maprestart
Allow the vote to restart the map
0 : Disable
1 : Enable
Default: 1

vote_limit
Maximum number of votes a player can call per map.
Default: 3
Note: This has no effect on players with the "novotelimit" admin flag

vote_percent
Percentage of "YES" votes required for a vote to pass.
Default: 50

#### g_voting
Bitflag to modify voting options
1 : Use total voters instead of total players to decide if a vote passes
2 : Votes that pass do not count for vote_limit
4 : "(called by *caller_name*)" will be displayed in the vote description
Default: 1

#### g_autoFireteams
If enabled, players will be proposed to join a fireteam when they join a team.
0 : Disable
1 : Enable
Default: 1

#### g_shove
Player shoving (pushing) distance
Default: 80

#### g_shoveNoZ
If enabled, can't shove (push) players vertically
0 : Disable
1 : Enable
Default: 0

#### g_playDead
Toggle playing dead with /playdead
0 : Disable
1 : Enable
Default: 1

#### g_dragCorpse
Enable/disable corpse dragging. (Standing over a wounded player and pressing F(activate) to drag the corpse)
0 : Disable
1 : Enable
Default: 1

#### g_classChange
Toggles class stealing. (Standing over a dead teammate and pressing F(activate) to steal his class).
0 : Disable
1 : Enable
Default: 0

#### g_forceLimboHealth
Modify the force limbo health (damage that has to be givent to a player when he's waiting for a medic before he's forced to tapout)
Default: 75
Note: If set to 0, the default value (75) will be used

#### g_privateMessages
If enabled, players can send private messages on the server.
0 : Disable
1 : Enable
Default: 1

#### g_XPSave
Bitflag to modify XPSave options
0 : Disable XPSave
1 : Enable XPSave - Saved when client disconnects, or when map ends/restarts
2 : Don't erase current map XP when map restarts
4 : Never reset saved XP - XP can still be reset using !resetxp, !resetmyxp.
8 : Drop clients with the same NGUID as a connecting client to avoid corrupted XPSave
Default: 15
Note: XPSave system requires a valid SQLite database!

#### g_XPSaveMaxAge
XPSave duration in seconds.
Default: 86400
Note: This value is ignored if g_XPSave flag 4 is enabled!

#### g_maxXP
Reset XP when a player reach this limit. (-1 to disable)
Default: -1

#### g_XPDecay
Decays players XP on the server when set to 1.
1 : Enable XP Decay
2 : Do not decay a player's XP when they are disconnected from the server.
4 : Do not decay a player's XP for the class they are currently playing as.
8 : Do not decay a player's XP while they are spectating.
16 : Do not decay a player's XP during warmup/intermission.
32 : Do not decay a player's XP when he/she is playing on a team.
64 : Do not decay a player's Battle Sense XP when he/she is playing.
128 : Do not decay a player's Light Weapons XP when he/she is playing.
Default: 0

#### g_XPDecayRate
Rate, in skill points per second, that XP skill points, for each skill, will decay when g_XPDecay is enabled.
Setting this to 0.2 would result in a player losing 12 points per minute IN ALL SKILLS,
so up to 84XP per minute if the player has skill points for each skill.
Default: 0.0

#### g_XPDecayFloor
Minimum floor that any skill XP can be reduced to by g_XPDecay.
Default: 0

#### g_fieldOps
Bitflag to modify FieldOps class options
1 : Field Ops do not spawn with binoculars if they have level 0 Battle Sense
2 : "Too many airstrikes requested" or "Insufficient fire support" will restore used charge bar
4 : "Too many airstrikes requested" or "Insufficient fire support" will restore half of used charge bar
Default: 0

#### g_friendlyFire
Bitflag to modify friendly fire options.
1 : Enable friendly fire
2 : Friendly fire does only half damage to teammates
4 : Friendly fire does the same damage to the inflictor
8 : Friendly fires affects movers (tanks, trucks, etc)
16 : Friendly fire delivers knockback (ex.: make a teammate fly with a grenade)
32 : Landmines cannot be tripped by teammates
64 : Landmines hurt teammates (even if friendly fire is disabled)
128 : Teammates don't activate tripmines
256 : Players don't trigger their own landmines (If they want to trigger and disarm their landmines, they have to walk over with pliers)
Default: 1

#### g_countryflags
Enable/Disable country flags system.
You need a valid GeoIP.dat in the nitmod path of your server.
This file can be downloaded at
http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
and must be unzipped in the 'nitmod' path of your server.
In case of problems, check your logfiles for lines with the "GeoIP" prefix.
0 : Disable
1 : Enable
2 : Bots will use the server's location for country flags (based on net_ip cvar)
Default: 0

#### g_goomba
Damage inflicted to a player when jumping or landing on him. (see also g_goombaFlags)
Default: 10

#### g_goombaFlags
Bitflag to modify Goomba behaviour. (see also g_goomba)
1 : goomba can only damage enemies
2 : Hopping on a player doesn�t do damage
4 : Hopping on a teammate doesn�t do damage
8 : Goomba doesn't do any damage to the falling player
16 : Instagib goomba damage
Default: 25

#### g_spawnInvul
Time, in seconds, players will be invulnerable after respawning.
Default: 3

#### g_intermissionTime
Time in seconds before loading the next map after the end of a round.
Default: 60

#### g_intermissionReadyPercent
Percentage of players (excluding spectators) who need to hit the "READY" button to load the next map without having to wait g_intermissionTime value.
Default: 100

#### g_antiwarp
If enabled, N!tmod will keep players from "warping" using ETPro-style AntiWarp(higly recommended)
What is "warping"?
"Warping" occurs when the server receives several new commands for a player in a very short period of time.
This happens because packets from the player were lost or never sent.
The player will appear to cross a great distance in a very short period of time, making them hard to hit and possibly allowing them to avoid landmine damage.
What is AntiWarp?
0 : Disable
1 : Enable
Default: 1

#### g_shortcuts
Enable shortcuts in chat
0 : Disable
1 : Enable
Here are the shortcuts that can be used in chat:
[a] Last player who give you ammo
[d] Last player who killed you
[h] Last player who gave you health
[k] Last player you killed
[l] Your current location
[n] Your nickname
[p] Teammate you're currently pointing at
[r] Last player who revived you
[s] Your current health
[t] Your current weapon ammo
[w] Weapon you're currently holding
Default: 1

#### g_fear
If a player selfkills (/kill) withing g_fear milliseconds after taking damage from an enemy, the kill will be awarded to this enemy.
Set to 0 to disable
Default: 2000

#### g_slashKill
Options for self-kill
1 : Half a charge bar on /kill
2 : No charge on a /kill
4 : Same charge as a player had upon the /kill
8 : Cannot use /kill
16 : Cannot /kill while poisoned
32 : While in limbo after a /kill, charge bar fills normally
64 : Cannot use /kill while in a fight
Default: 0

sv_fps
Number of frames the server will generate by second
Default: 20

#### g_truePing
Enable true ping calculation based on client commands timestamps.
0 : Disable
1 : Enable
Default: 0

#### g_poison
Enable or disable Poison syringes for level 4 light weapons.
0 : Disable
1 : Enable - Poison can only be cured by medic syringes
2 : Enable - Poison can be cured by health cabinets, medpacks dropped by other medics and medic syringes.
4 : Enable - Jaymod style damage ratio (-10hp/1500ms, N!tmod ratio : -20hp/1000ms)
8 : Enable - Can't cure poison with medpacks dropped by our poisoner (requires flag 2 to be set)
Default: 0

#### g_drawAttackerHP
If enabled, players will see their last killer's remaining HP when they die.
0 : Disable
1 : Enable
Default: 1

#### g_medics
Bitflag to modify Medic class behaviour.
1: Medics can�t pick up their own med packs at all
2 : Medics can't get akimbo
4 : Medics can't carry or pickup a SMG
8 : Medics can heal teammates with their revive syringes.
16 : Level 5 First Aid skill will allow players to regenerate HP in all classes (except medic class if the flag 32 is set)
32 : Medics don't regenerate HP at all
64 : Medics regenerate normal HP at 2HP/second and extra HP at 1HP/second
128 : Medics regenerate normal HP at 1HP/second and don't regenerate extra HP at all
Default: 0

#### g_msgs
Delay, in seconds, between banner messages. (see g_msgpos)
Default: 0

#### g_msgpos
Banners location (see g_msgs)
0 : Chat
1 : Client console
2 : Top center of the screen
Default: 0

#### g_constructiblexpsharing
If enabled, every enginner that builds a constructible objective will receive XP points.
This prevents a player from receiving all the XP when finishing a partly built construction
while another engineer might have spent a "lot" of time building the rest
0 : Disable
1 : Enable
Default: 0

#### g_asblock
Airstrike blocking options
1 : Make an announcement whenever an airstrike is blocked.
2 : A player may easily block an airstrike by standing, crouching or proning over it.
4 : Can't block airstrikes called by FieldOps with Skill Level 3 or higher.
Default: 0

#### g_canisterKick
Allow player to kick canisters on the floor.
0 : Disable
1 : Enable
Default: 0

#### g_canisterKickOwner
Sets the kicker as the owner of the canister kicked.
0 : Disable
1 : Enable
Default: 0

#### g_doubleJump
Toggle double jump
0 : Disable
1 : Enable - Jaymod style
2 : Enable - ETPub/NoQuarter style
Default: 0

#### g_DJHeight
If double jump is enabled, this defines how many times higher the the second jump will be.
Default: 1.4

#### g_rockets
Bitflag to modify Panzerfaust rockets behavior.
1 : Guided Panzer rockets
2 : Homing Panzer rockets (follow nearby enemies)
Default: 0

#### g_skills
Bitflag to keep a specific class award when playing other classes
1 : Flak Jacket carries over
2 : Enemy recognition carries over
4 : Assassin backstab bonus carries over
8 : Landmine spotting ability carries over
Default: 0

#### g_missileCams
Bitflag to enable missile cameras (Clients can disable cameras with cg_drawCam 0)
1 : Enable Panzer Cam
2 : Enable Mortar Cam
4 : Enable Rifle Grenade Cam
0 : Disable
Default: 0

#### g_war
Enable a War Mode
1 : Enable Panzer War
2 : Enable Sniper War
3 : Enable Rifle Grenade War
4 : Enable Knife War - (replacing g_knifeonly cvar since 2.2)
0 : Disable
Default: 0
Note: The value of this cvar will be modified when using !panzerwar and !sniperwar commands.

n_sniperWarOptions
Bitflag to control some SniperWar options
1 : Players will spawn with binoculars
2 : Scoped headshots instagib the target
4 : Players will spawn with 40 grenades
Default: 7
Note: These options are only used when SniperWar Mode is enabled. See g_war

#### g_announcer
Bitflag to enable some announces.
1 : Enable Killing Spree announce
2 : Enable Death Spree announce
4 : Enable Multikills announce
8 : Enable First Blood announce
16 : Enable First Headshot announce
32 : Enable Killing Spree end announce
64 : Enable Death Spree end announce
0 : Disable
Default: 127

#### g_multikillTime
Maximum delay, in milliseconds, between two kills, to count as a multikill
Default: 2000

#### g_adrenaline
Bitflag to modify adrenaline behaviour (See also g_adrenClasses)
1 : Players don't spawn with adrenaline
2 : Ammo packs don't contain adrenaline syringes
4 : Players spawn with only 1 adrenaline syringe
Default: 0

#### g_adrenClasses
Bitflag cvar to allow adrenaline to carry-over in specific classes.
1 : Soldier
2 : Medic
4 : Engineer
8 : Field Ops
16 : CovertOps
Default: 2

omnibot_path
Absolute path to your Omni-bot installation.
Default: ""

omnibot_enable
Toggle Omni-Bot support on the server.
0 : Disable
1 : Enable
Default: 0

omnibot_flags
Various Omni-Bot options
1 : Disable XPSave for bots
2 : Bots cannot mount tanks
4 : Bots cannot mount emplaced guns
8 : Don't count bots ('omnibot_playing' cvar will be set to -1 if this flag is set)
16 : Bots will target ungibbed enemies
32 : Bots will trigger team and spotted mines
64 : Bots can use g_shove
65536 : Bots will use Poison Gas Landmines (if enabled, see g_weapons) rather than normal Landmines
Default: 0

#### g_noAttackInvul
If enabled, player will lose his spawn protection if he starts attacking before g_spawnInvul seconds.
0 : Disable
1 : Enable
Default: 0

ip_max_clients
Maximum number of connections allowed from the same IP address. Set to 0 to disable.
Default: 3

#### g_pickAnyWeapon
If enabled, players can pick any weapon on the ground, no matter what class they are playing.
0 : Disable
1 : Enable
Default: 0
Note: Some weapons may be unavailable due to some weapon restrictions settings

#### g_noReload
Unlimited Ammo (No need to reload, clips are refilled automaticly when empty)
0 : Disable
1 : Enable
Default: 0

#### g_noCharge
No charge usage
0 : Disable
1 : Enable
Default: 0

#### g_instantSpawn
Players respawn instantly, respawn times are ignored
0 : Disable
1 : Enable
Default: 0

#### g_revenge
Players will see a "REVENGE!" announce on their screen if they kill the last player who killed them. SINCE 2.2.1: 1XP is awarded for every revenge.
0 : Disable
1 : Enable
Default: 0

lua_modules
LUA scripts you want to run on the server, delimited by a space (these have to be placed in the nitmod folder of your server)
Example: If you want to run "script1.lua" and "script2.lua": set lua_modules "script1.lua script2.lua"
Default: ""

lua_allowedModules
If set, only LUA modules with the matching sha1 signatures listed in this cvar will be allowed to load.
Default: ""

#### g_autoQuitDelay
Delay in minutes before sending "quit" command to the server. Server has to be empty. Useful for servers running in a loop, so they can be restarted without any admin intervention.
Set to 0 to disable this feature.
Default: 0

#### g_hitboxes
Controls new advanced animation linked players hitboxes (Bitflag).
0 : Disable, server use "standard" hitboxes + ETPro 'real head' and N!tmod 'real body' if enabled
1 : Enable server use animation linked player hitboxes
2 : Enable More precise hit detection, seems perfect for sniper servers, but awful for public servers...
4 : Experimental first detection, give first zone detect
8 : Use advanced detection order
16 : Players can avoid bullet impacts when they are behind a player who has just been revived (Default ET behavior) New since 2.2.1
Default: 0

#### g_realBody
Bitflag to control various body hitbox options.
Normal body hitbox is big compared to the player, so you can get bodyshots when you�re not aiming at a player's body.
Players will be slightly harder to hit with this feature enabled.
0 : Disable (Use ETPro style Hitboxes)
1 : Reduce body hitbox width
2 : body hitbox height lowered to shoulders
4 : Dead/Prone/Playdead hitboxes height lowered
8 : Crouch hitbox lowered to shoulders (a little more than ETPro)
Default: 0

#### g_realHead
Toggle ETPro "real head" code. Head hitbox will follow the player animation. This is HIGHLY recommended.
0 : Disable
1 : Enable
Default: 1

#### g_headshot
Bitflag for Headshot mode options
1 : Only headshots do damage
2 : Headshots instagib targets
0 : Disable
Default: 0

#### g_weapons
Bitflag to control various weapon options
1 : Knife can get headshots
2 : Throwing knife can get headshots
4 : Level 5 Engineers will spawn with a Bomb. - Looks like a red smoke bomb, but does as much damage as a dynamite and explodes in 4 seconds. Only 1 per life
8 : Level 5 Engineers' landmines inflict +15% damage
16 : Allow Engineer's "Bomb" to damage movers (trucks, tanks, etc.)
32 : Disable Sten overheating
64 : Disable Mobile MG42 overheating
128: Allow headshots with Mobile MG42
256 : Allow players to fire while leaning (1st person view and 3rd person animation are modified if this option is enabled)
512 : Allow Medics and Engineers to pick Sten in limbo
1024 : Enable fast shooting for MP40, Thompson and Sten (delay between rounds lowered from 150ms to 110ms)
2048 : Throwing knives will poison targets
4096 : Fire underwater (except flamers, panzers, rifle grenades, mortars and MG42)
8192 : Enable poison gas canisters
16384 : Enable poison gas landmines
32768 : Enable tripmines
Default: 0

#### g_dualSMG
(Bitflag) Allow players to carry a 2nd SMG (MP40 or Thompson). This option does NOT work for CovertOps AND Soldiers.
0 : Disable
1 : Enable
2 : Drop both primary weapons when players go into limbo mode (flag 1 must be enabled)
Default: 0

#### g_damageweapons
Bitflag to enable ability to shoot some weapons to damage and destroy them
1 : Hand grenades can be damaged
2 : Satchel charges can be damaged
4 : Airstrike markers can be damaged
8 : Smoke canisters can be damaged
16 : Bombs can be damaged
32 : Tripmines can be damaged
64 : Poison gas canisters can be damaged
Default: 0

#### g_secureShrubPassword
If set, "Secure Shrubbot Login" will be enabled.
When this feature is enabled, some important !commands require admins to be logged in using the "/sslogin".
We also added "/sslogout" client command
This feature has been added a long time ago to prevent problems related go PBGUID spoofing, we are not sure if it's still useful...
Default: ""

#### g_GUIDChecks
If enabled, server will check clients NGUID. If the test fails, server will kick the client.
0 : Disable
1 : Enable
Default: 1

#### g_IPChecks
If enabled, server will check clients IP. If the test fails, server will kick the client.
0 : Disable
1 : Enable
Default: 1

shoutcastPassword
Shoutcaster password.
When this feature is enabled, players will be able to log in using the "/sclogin password" client command.
Once you become a shoutcaster, you will be able to see (when spectator):
Landmines
Players names
Dynamite timers
Revive sprites above dead players
Tripmines beam
In order to revoke your shoutcaster status, use the "/sslogout" client command.
Leave empty or set to "none" to disable
Default: ""

#### g_misc
Bitflag to control a few miscellaneous options.
1 : Don't let teammates disarm dynamite near objective (only the dynamite owner can disarm it, and enemies, of course...)
2 : Do not give XP to players who kill someone who has been inactive for more than 30 seconds
4 : Do not give xp for med packs
8 : Do not give xp for ammo packs
16 : Visible enemy landmines (Battle sense level 4) will be transparent red/blue instead of the usual transparent white texture
32 : Enable realistic lean animation (Attention this will be forced if g_weapons flag 256 is enabled!)
64 : Players who drown can't be revived
Default: 0

#### g_spectatorNames
If enabled, spectators will be able to see name above players (a sort of "minimal shoutcaster status")
0 : Disable
1 : Enable
Default: 0

#### g_teamChangeDelay
/team Flood Protection
If enabled, it sets the minimum delay, in milliseconds, before a new team change.
Players are not allowed to change team if the time between the last team change and the current attempt is lower than the specified delay.
Players can always move spec without any delay if they are currently in Axis or Allies team
Set to 0 to disable.
Default: 0

n_SQLiteDBPath
Absolute path to the SQLite database file.
Must include filename (ex: C:\nitmod.sqlite) !!
Database file will automaticly be created.
Admin System, XPSave, Mails and Map Records will be unavailable if this cvar is not or not correctly set or if something went wrong while opening the file.
Errors will be printed in the server console and written to logs (if logging is enabled). This can help us solving your problems.
Default: ""

n_UserDBSync
For use with multiple servers on a single SQLite DB.
If enabled, server will re-load the user from database when he connects to avoid data loss.
If the DB is used by a single server, set it to 0 to avoid useless ressources usage.
0 : Disable
1 : Enable
Default: 0

n_userMail
If enabled, players will be allowed to send "mails" to offline players.
This feature can be useful if a player needs to contact a server admin but isn't connected at the same time.
0 : Disable
1 : Enable
Default: 1
Note: Requires a valid SQLite database! See n_SQLiteDBPath

n_mapRecords
Enable/Disable Map Spree Records and Map Frag Records
0 : Disable
1 : Enable
Default: 1
Note: Requires a valid SQLite database! See n_SQLiteDBPath

n_proneDelay
Options to modify the way player proning works
0 : No spread change, players can't stand up for 750 milliseconds (normal behavior)
1 : Maximum spread for 1 second after proning, players can't stand up for 1750 milliseconds (ETPro b_proneDelay 1 behavior)
2 : Maximum spread for 1 second after proning, players can't stand up for 750 milliseconds (New)
3 : No spread change, players can't stand up for 1750 milliseconds (New)
Default: 0

n_dynamiteTimer
Sets how many milliseconds it takes to a dynamite to explode after it has been armed.
Default: 30000
Note: If set lower than 5000, or higher than 60000, default value is used.

#### g_throwDistance
Sets the distance a ammo or health pack is thrown.
Default: 75

#### g_dropAmmo
Sets the number of ammopacks a FieldOps drops when killed.
Default: 0

#### g_dropHealth
Sets the number of medpacks a Medic drops when killed.
Default: 0

n_ammoPackSinkDelay
Delay (in milliseconds) before dropped ammopacks disappear.
Default: 30000
Note: If set lower than 5000, or higher than 60000, default value is used.

n_medPackSinkDelay
Delay (in milliseconds) before dropped medpacks disappear.
Default: 30000
Note: If set lower than 5000, or higher than 60000, default value is used.

#### g_ammoCabinetTime
Time, in milliseconds, it takes for ammo packs to re-appear in ammo cabinets
Default: 60000

#### g_healthCabinetTime
Time, in milliseconds, it takes for health packs to re-appear in health cabinets
Default: 10000

#### g_flushItems
Allows dropped items to lay flush with the angle of the ground they are on.
0 : Disable
1 : Enable
Default: 1

#### g_dropObj
If set higher than 0, players can drop the objective *value+1* times per life, using "dropobj" command (can be used in console or bound to a key).
Default: 0

n_allowDropWeapon
If enabled, players can drop their primary weapon to the floor using "dropweapon" command (can be used in console or bound to a key).
0 : Disable
1 : Enable
Default: 0

n_preciseLandmineTrigger
If enabled, player bounding box has to be inside the landmine bounding box to trigger it, instead of calculating the distance between the landmine and the player.
0 : Disable
1 : Enable
Default: 0

n_crazyGravity
Toggle Crazy Gravity (Automaticly set to 0 on map end)
0 : Disable
1 : Enable
Default: 0

n_crazyGravityMin
Minimum gravity value when Crazy Gravity is enabled.
Default: 100

n_crazyGravityMax
Maximum gravity value when Crazy Gravity is enabled.
Default: 2000

n_crazyGravityInterval
Delay, in milliseconds, between gravity changes when Crazy Gravity is enabled.
Default: 30000

n_minNameLength
If set higher than 0, minimum length of player names when they connect.
Default: 0
Note: Since 2.2.1, checks for visible characters only (spaces and color codes are ignored)

n_reviveSpreeOptions
Bitflag to control revive spree options.
0 : Disable revive sprees
1 : Enable revive sprees
2 : Count syringe heals as revives
4 : Announce revives to clients
8 : Announce revive spree end
16 : Count syringe heals for multi revives
Default: 1

n_multiReviveTime
Maximum delay, in milliseconds, between two revives, to count as a multi revive.
Hardcoded multirevive sound path on client side: sound/nit/mr1.wav, sound/nit/mr2.wav, sound/nit/mr3.wav, sound/nit/mr4.wav
These sounds are not provided into the official PK3 because we have no sounds for them, it's optional.
If you want to use your own sounds, add them into a custom pk3 using the above paths.
Default: 2000

n_tankMountDelay
Delay in SECONDS a player must wait before he can re-mount a tank. Set to 0 to disable this delay.
Default: 0

n_crouchStandDelay
Delay in MILLISECONDS a player must wait before he can stand up after crouching. Set to 0 to disable this delay.
Default: 0

n_standCrouchDelay
Delay in MILLISECONDS a player must wait after crouching and standing up to crouch again. Set to 0 to disable this delay.
Default: 0

n_noSkillUpgrades
If enabled, players can still score XP but their skill levels will be locked to 0 (Same as ETPro's b_noskillupgrades).
Default: 0

n_killAssistances
Bitflag to toggle kill assistances.
An announce will appear on your screen if you inflicted damage to a player but someone else kills him.
Players will get +1XP if inflicted damage is lower than 50, +2XP if higher.
TeamKill assistances causes 1 or 2 XP loss depending on damage.

0 : Disable
1 : Enable Kill Assistances
2 : Enable Suicide Assistances
4 : Enable TeamKill Assistances
Default: 1

n_greetingPos
Controls where greeting are displayed.
0 : Chat
1 : Center of the screen
2 : Obituaries (popups on left)
3 : Banners on top of the screen
4 : Console only
Default: 0

n_voteMaxTimelimit
If set higher than 0, this caps the maxmim timelimit vote value (Higher values will be capped to this maximum value).
Default: 0

n_classesMaxHP
Allows setting max HP for each classes. Values must be space separated.
Classes, in order, are: Soldier, Medic, Engineer, FieldOps, CovertOps.
Example: value "120 150 140 110 130" means: Soldiers 120 HP Max, Medics 150 HP Max, Engineers 140 HP Max, FieldOps 110 HP Max, CovertOps 130 HP Max
Setting one of the values to 0 will use the usual max HP value for that class.
Default: 0 0 0 0 0

n_NxAC_CvarScan
Set this CVAR to 1 to enable NxAC CVAR Scanner.
Default: 0

n_NxAC_CvarScanWait
Delay in milliseconds before server starts sending cvar queries to a client after he has finished connecting.
Default: 10000

n_NxAC_CvarScanDelay
Delay in milliseconds between each cvar query. Values too low might cause lags or server command overflow.
Default: 750

n_NxAC_CvarScanInterval
Delay in milliseconds before starting a new scan after the previous one has finished.
Default: 30000

n_NxAC_CvarScanMaxWarnings
Maximum number of warnings before kicking a player who doesn't respect the cvar rules. Instant kick if set to 0.
Default: 1

n_NxAC_CheckClientBinary
Set this CVAR to 1 to enable NxAC Client Checksum verification.
Default: 0

n_NxAC
Controls actions taken by NxAC when a cheat violation is detected.
See NxAC Setup tutorial for further informations.
0 : Log and report violation to everyone on the server.
1 : Log, report violation to everyone on the server and automatically kick OR ban the player.
2 : Log, report violation to everyone on the server, automatically request client screenshot and kick OR ban the player.
Default: 2

#### g_artilleryHints
Toggle friendly artillery zone hints (can also be dissabled on client side with cg_artilleryHints).
0 : Disable
1 : Enable
Default: 1