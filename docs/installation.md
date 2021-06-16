---
sidebar_position: 2
---

# Installation

## Download

[Nitmod 2.3.4 Beta 4](http://etmods.net/downloads/nitmod_2.3.4-b4.zip)

## Install/Update

1. Stop the server.
2. If installing for the first time, create a nitmod folder next to your etmain folder.
3. Copy the .pk3 and the library file to the nitmod folder. If you're running a Windows server, it's the .dll. For macOS it's qagame_mac. For Linux x86 and x64 it's i386.so and x86_64.so respectively. If you're making an upgrade, delete the old .pk3.
4. If installing for the first time, change your server's "fs_game" cvar to "nitmod" (either in your control panel for rented game servers, or in your startup command if you're hosting it yourself).
5. Start the server.

## Configuration

N!tmod releases come with a sample configuration file (nitmod.cfg).
It contains every mod Cvars set to their default value, and a small description of what they're used for.
For a complete description, visit our [Cvar Reference](cvar-reference).

### Setting up SQLite Database

N!tmod includes a powerful Shrubbot like admin system, partially rewritten to use a SQLite database, extend features and provide higher performance.
It allows you to modify/add/delete admin levels and manage every player who has connected to your server, even whey they are offline

Admin system is disabled by default, because it requires you to set the path to where you want the SQLite database file to be saved, using the n_SQLiteDBPath Cvar.
The database file will be automaticly created if the above cvar is set correctly, and the server process has read/write permissions on the specified path.
If an invalid filename is provided, the mod will attempt to create a "NITMOD_DB.sqlite" database inside "fs_homepath"/nitmod directory.
The SQLite database is also required for XPSave [see g_XPSave](cvar-reference#g_xpsave), Offline messaging (see n_userMail) and Map records (see n_mapRecords)
cvar_reference####g_XPSave

### Admin levels

To setup admin levels on your server, you must create a levels.db file inside nitmod folder [levels-sample.db](download sample here).
DO NOT copy & paste level entries from another mod's 'shrubbot.cfg' file, it will NOT work!

Here is 'levels.db' file structure description:
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every level.
level =     // Level Number
name =      // Level Name
flags =     // Flags
gtext =     // Optional Greeting Text (user's greeting text overrides this value)
gsound =    // Optional Greeting Sound (user's greeting sound overrides this value)

This file can be edited ingame (or through rcon) using !levedit, !levadd and !levdelete commands.
The file will automaticly be overwritten when using one of these commands.
If you manually edit this file while the server is running, use !readconfig command to load modifications.
Use !levlist and !levinfo commands to display informations about existing levels.

### Custom commands

N!tmod allows adding custom commands to the existing admin system commands set.
To setup custom commands on your server, you must create a commands.db file inside nitmod folder [commands-sample.db](download sample here).
DO NOT copy & paste custom commands from another mod's 'shrubbot.cfg' file, it will NOT work!

Here is 'commands.db' file structure description:
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every command.
name =      // Command name (ex: "test")
exec =      // Command sent to server (ex: chat "^3Test command")
desc =      // Text displayed in !help cmdname (ex: "Test command")
levels =    // Levels having access to this command, delimited by spaces (ex: 0 1 2)

If you manually edit this file while the server is running, use !readconfig command to load modifications.

### Custom votes

Starting from version 2.2, server admins can create custom votes.
To add custom votes, you must create a votes.db file inside nitmod folder

Here is 'votes.db' file structure description (N!tmod 2.2):
********** // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every vote.
name =     // max 20 chars vote name (to use with /callvote)
cmd =      // max 100 chars command to execute on server side when vote passes
message =  // max 256 chars message displayed on clients when vote is called
[votes-sample-2-2.db](installation)

Starting from N!tmod 2.3, the votes.db syntax has been modified, adding more flexibility.
Here is 'votes.db' file structure description (N!tmod 2.3 and higher)
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every vote.
name =      // max 20 chars vote name (to use with /callvote)
message =   // max 256 chars message displayed on clients when vote is called
help =      // max 256 chars vote description (ex: /callvote *name* ?)
exec =      // max 1024 chars command to execute on server side when vote passes
passtext =  // max 256 chars message displayed on clients if vote passes
levels =    // max 64 levels allowed to call this vote (if empty, vote is available for all levels)
[votes-sample-2-3.db](installation)

If you manually edit this file while the server is running, use !readconfig command to load modifications.

To call one a custom vote, use the /callvote command in your console, followed by the custom vote name. Ex : /callvote mycustomvote.