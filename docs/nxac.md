---
sidebar_position: 4
---

# NxAC

## What is NxAC?
NxAC is N!tmod's anti-cheat tool and was officially released in version 2.3. It's built-in to the mod and just needs to be configured.

By default, NxAC will automatically report violations to everyone on the server, request a screenshot and kick/ban the cheater.
Every violation will be logged into the `nitmod/NxAC/NxAC_Violations.log` file.

## Configuration

### Enable NxAC
If you want your server to automatically kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the [n_NxAC](cvar-reference#n_nxac) to 1 in your server config.  
If you want your server to automatically request a screenshot, kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the [n_NxAC](cvar-reference#n_nxac) to 2 in your server config.

This is a latched cvar, which means you will have to restart the map, or wait for the next map, before changes take effect.
Once this cvar is enabled, NxAC server will automatically take actions when it detects a violation.
If the [n_NxAC](cvar-reference#n_nxac) cvar is set to 0, it will ONLY broadcast the violation to everyone on the server and the server will NOT be listed as a "cheat protected" server.

#### Automatic kick violations:
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

#### Options
[n_NxAC_CvarScan](cvar-reference#n_NxAC_CvarScan): Set this CVAR to 1 to enable NxAC CVAR Scanner (Default: "0")  
[n_NxAC_CvarScanWait](cvar-reference#n_NxAC_CvarScanWait): Delay in milliseconds before server starts sending cvar queries to a client after he has finished connecting (Default: "10000")  
[n_NxAC_CvarScanDelay](cvar-reference#n_NxAC_CvarScanDelay): Delay in milliseconds between each cvar query. Too short might cause lags or server command overflow (Default: "750")  
[n_NxAC_CvarScanInterval](cvar-reference#n_NxAC_CvarScanInterval): Delay in milliseconds before starting a new scan after the previous one has finished (Default "300000")  
[n_NxAC_CvarScanMaxWarnings](cvar-reference#n_NxAC_CvarScanMaxWarnings): Maximum number of warnings before kicking a player who doesn't respect the cvar rules. Instant kick if set to 0. (Default: "1")  

The syntax for a CVAR Scanner depends of what type of rule is used, and can look like:  
CVARNAME RULE VALUE (EQ, G, L, INC and EXC rules)  
CVARNAME RULE VALUE1 VALUE2 (IN, OUT, GE and LE rules)  
CVARNAME RULE (NULL rule)  

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


It is recommended to search for known hack cvars only. We do not recommend scanning for engine cvars or other original game cvars (r_*, cl_*, cg_*, in_* etc...).
If you want to restrict "normal" cvars, you should use N!tmod's forcecvar and sv_cvar features instead.

Here is a [cvarlist-sample.cfg](http://etmods.net/NxAC/cvarlist.cfg). The cvarlist should be saved as `nitmod/NxAC/cvarlist.cfg`.

### Client Checksum verification
NxAC can verify a game client's checksum and disallow unknown or self-compiled game clients.

#### Enable Client Checksum verification
* Set the cvar [n_NxAC_CheckClientBinary](cvar-reference#n_nxac_checkclientbinary) to 1 (Default: 0)

* Provide a list of known checksums at `nitmod/NxAC/checksums.cfg`  
Here is a [checksums-sample.cfg](http://etmods.net/NxAC/checksums.cfg)

The checksum list will be continuously updated as new versions of ET: Legacy are released. You can add more entries by generating a SHA-1 checksum of ET.exe or etl.exe (ET: Legacy) and adding one checksum per line.
