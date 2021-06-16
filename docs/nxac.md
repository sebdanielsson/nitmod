---
sidebar_position: 4
---

# NxAC
This tutorial is for N!tmod 2.3 and higher!

## What is NxAC?
NxAC is N!tmod's built-in AntiCheat tool.
It exists since N!tmod 2.2.1, but it has been officially released in 2.3, including many fixes.

## How to install NxAC?
You don't have to install it. It's built-in the mod. All you have to do is set it up properly to your own needs.

## Configuration
By default, NxAC will automatically report AntiCheat violations to everyone on the server, request a screenshot and kick/ban the cheater.
Every violations will also be logged into the "NxAC/NxAC_Violations.log" file.
It is possible to modify the behaviour, as described below.

### Customization
If you want your server to automatically kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the n_NxAC to 1 in your server config.
If you want your server to automatically request a screenshot, kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the n_NxAC to 2 in your server config.
This is a latched cvar, which means you will have to restart the map, or wait for the next map before changes take effect.
Once this cvar is enabled, NxAC server will automatically take actions when it detects an AntiCheat violation.
If the n_NxAC cvar is set to 0, it will ONLY broadcast the AntiCheat violation announce to everyone on the server, and the server will NOT be listed as a "cheat protected" server.

Automatic kick for these violations:
* "UNKNOWN_CLIENT_BINARY" - NxAC has detected that this player is using an ET client that is not allowed on the server, because its SHA1 checksum wasn't found inside the "NxAC/checksums.cfg" file.
* "SUSPICIOUS MEMORY MODULE" - NxAC has detected a bad memory module loaded onto the game. In other words, this is a hack...
* "UNEXPECTED CVAR SCAN DATA" - NxAC Server has received an unexpected response to a Cvar Scan query.
Automatic PERMANENT ban for these violations (Undeniable evidences of cheating):
* "WALLHACK" - NxAC has detected the player is using a Wallhack.
* "GAMEHACK" - NxAC has detected the player's game has been hacked.
These violations will only trigger a public announce:
* "SCREENSHOT FAILURE" - A screenshot request has been sent to this player, and it failed.

### CVAR Scanner
NxAC can scan clients to find CVARS that should not be registered in the game (usually known cheat cvars) or find CVARS with bad values.
To enable this feature, you must install a list of cvar rules on the server, and enable some cvars in your server config.

Server config
n_NxAC_CvarScan: Set this CVAR to 1 to enable NxAC CVAR Scanner (Default: "0")

n_NxAC_CvarScanWait: Delay in milliseconds before server starts sending cvar queries to a client after he has finished connecting (Default: "10000")
n_NxAC_CvarScanDelay: Delay in milliseconds between each cvar query. Too short might cause lags or server command overflow (Default: "750")
n_NxAC_CvarScanInterval: Delay in milliseconds before starting a new scan after the previous one has finished (Default "300000")
n_NxAC_CvarScanMaxWarnings: Maximum number of warnings before kicking a player who doesn't respect the cvar rules. Instant kick if set to 0. (Default: "1")

The syntax for a CVAR Scanner depends of what type of rule is used, and can look like:
* CVARNAME RULE VALUE (EQ, G, L, INC and EXC rules)
* CVARNAME RULE VALUE1 VALUE2 (IN, OUT, GE and LE rules)
* CVARNAME RULE (NULL rule)
The CVAR scanner supports these rules:
* EQ "val": Cvar value must be EQUAL to val
* IN "val1" "val2": Cvar value must be INSIDE val1 and val2
* OUT "val1" "val2": Cvar value must be OUTSIDE val1 and val2
* G "val": Cvar value must be GREATER than val
* GE "val": Cvar value must be GREATER than val or EQUAL to val
* L "val": Cvar value must be LOWER than val
* LE "val": Cvar value must be LOWER than val or EQUAL to val
* INC "val": Cvar value must INCLUDE (must contain) val
* EXC "val": Cvar value must EXCLUDE (must not contain) val
* NULL: Cvar must not exist, at all

### CVAR Scanner List
It is recommended to search for known hack cvars only.
We do not recommend scanning for engine cvars or other original game cvars (r_*, cl_*, cg_*, in_* etc...)
It is up to you to decide which cvar rules you want to use on your server, but if you want to restrict 'normal' cvars, you should use N!tmod's forcecvar and sv_cvar features instead
Our official sample cvar rules list can be downloaded here
The cvarlist.cfg file must be saved as "your_ET_server_folder/nitmod/NxAC/cvarlist.cfg".

### NxAC Client Checksum verification
NxAC can check client's game SHA1 checksum to disallow unknown/self compiled ET clients.
To enable this feature, you must install a list of allowed SHA1 checksums on the server, and enable a cvar in your server config.

### Server config
n_NxAC_CheckClientBinary: Set this CVAR to 1 to enable NxAC Client Checksum verification (Default: "0")

### How to create the allowed SHA1 checksums list?
Our official sample cvar rules list can be downloaded here
We will update this sample list when new "official" and "clean" ET clients are released (most likely, new ET:Legacy versions).
To update this list yourself, you must generate ET.exe (or etl.exe for ET:Legacy) SHA1 Checksum and add it to the list (one checksum per line).
The checksums.cfg file must be saved as "your_ET_server_folder/nitmod/NxAC/checksums.cfg".
