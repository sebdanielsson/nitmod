---
sidebar_position: 2
id: installation
title: Installation
hide_title: false
hide_table_of_contents: false
---

## Download

[Nitmod 2.3.4 Beta 4](http://etmods.net/downloads/nitmod_2.3.4-b4.zip)

## Install/Update

1. Stop the server.
2. If installing for the first time, create a nitmod folder next to your etmain folder.
3. Copy the .pk3 and the library file to the nitmod folder. If you're running a Windows server, it's the .dll. For macOS it's qagame_mac. For Linux x86 and x64 it's i386.so and x86_64.so respectively. If you're making an upgrade, delete the old .pk3.
4. If installing for the first time, change your server's `fs_game` cvar to `nitmod` (either in your control panel for rented game servers, or in your startup command if you're hosting it yourself).
5. Start the server.

## Configuration

N!tmod releases come with a sample configuration file [nitmod-sample.cfg](examples/nitmod-sample.cfg). It should be saved as `nitmod/nitmod.cfg`. It contains every mod cvar set to it's default value, and a small description of what it is used for.
For more information, read the [Cvar Reference](cvar-reference).

### Setting up the SQLite database

Some features, like the admin system, [g_XPSave](cvar-reference#g_xpsave) and [n_mapRecords](cvar-reference#n_maprecords) are disabled by default since they need access to a SQLite database to function. To create the database, use the cvar [n_SQLiteDBPath](cvar-reference#n_sqlitedbpath) to set a location for the SQLite database file to reside on. The database file will be automaticly created if the above cvar is set correctly and the server process has read/write permissions on the specified path. If an invalid filename is provided, N!tmod will attempt to create the database inside the nitmod directory.

### Admin levels

To setup admin levels on your server, you need to configure `nitmod/levels.db`. Here is a [levels-sample.db](examples/levels-sample.db).

### Description

```raw
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every level.
level =     // Level Number
name =      // Level Name
flags =     // Flags
gtext =     // Optional Greeting Text (user's greeting text overrides this value)
gsound =    // Optional Greeting Sound (user's greeting sound overrides this value)
```

This file can be edited ingame (or through rcon) using `!levedit`, `!levadd` and `!levdelete` commands.
The file will automaticly be overwritten when using one of these commands.
If you manually edit this file while the server is running, use `!readconfig` command to load modifications.
Use `!levlist` and `!levinfo` commands to display informations about existing levels.

### Custom commands

N!tmod allows adding custom commands to the existing admin system commands set.
To setup custom commands on your server, you must create `nitmod/commands.db`. Here is [commands-sample.db](examples/commands-sample.db).

#### Description custom commands

```raw
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every command.
name =      // Command name (ex: "test")
exec =      // Command sent to server (ex: chat "^3Test command")
desc =      // Text displayed in !help cmdname (ex: "Test command")
levels =    // Levels having access to this command, delimited by spaces (ex: 0 1 2)
```

If you manually edit this file while the server is running, use `!readconfig` command to load modifications.

### Custom votes

To setup custom votes on your server, you must create `nitmod/votes.db`. Here is [votes-sample.db](examples/votes-sample.db).

#### Description custom votes

```raw
**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every vote.
name =      // max 20 chars vote name (to use with /callvote)
message =   // max 256 chars message displayed on clients when vote is called
help =      // max 256 chars vote description (ex: /callvote *name* ?)
exec =      // max 1024 chars command to execute on server side when vote passes
passtext =  // max 256 chars message displayed on clients if vote passes
levels =    // max 64 levels allowed to call this vote (if empty, vote is available for all levels)
```

If you manually edit this file while the server is running, use !readconfig command to load modifications.

To call one a custom vote, use the `/callvote` command in your console, followed by the custom vote name.  
**Example:** `/callvote mycustomvote`
