"use strict";(self.webpackChunknitmod=self.webpackChunknitmod||[]).push([[9634],{7081:(e,s,n)=>{n.r(s),n.d(s,{Blue:()=>x,Green:()=>c,Red:()=>h,Yellow:()=>j,assets:()=>o,contentTitle:()=>t,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(5893),i=n(1151);const l={slug:"nitmod-2.3.4-b1",title:"N!tmod 2.3.4 Beta 1",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:new Date("2021-05-24T00:00:00.000Z"),description:"",image:"/static/img/nitmod.webp"},t=void 0,d={permalink:"/nitmod/blog/nitmod-2.3.4-b1",editUrl:"https://github.com/sebdanielsson/nitmod/edit/main/blog/blog/2021-05-24-nitmod-2.3.4-b1.md",source:"@site/blog/2021-05-24-nitmod-2.3.4-b1.md",title:"N!tmod 2.3.4 Beta 1",description:"",date:"2021-05-24T00:00:00.000Z",formattedDate:"May 24, 2021",tags:[{label:"nitmod",permalink:"/nitmod/blog/tags/nitmod"},{label:"release",permalink:"/nitmod/blog/tags/release"},{label:"changelog",permalink:"/nitmod/blog/tags/changelog"},{label:"beta",permalink:"/nitmod/blog/tags/beta"}],hasTruncateMarker:!1,authors:[{name:"N!trox*",title:"Founder",imageURL:"/img/nitmod-square.webp"}],frontMatter:{slug:"nitmod-2.3.4-b1",title:"N!tmod 2.3.4 Beta 1",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:"2021-05-24T00:00:00.000Z",description:"",image:"/static/img/nitmod.webp"},unlisted:!1,prevItem:{title:"N!tmod 2.3.4 Beta 2",permalink:"/nitmod/blog/nitmod-2.3.4-b2"},nextItem:{title:"N!tmod 2.3.2 (Build 20210131)",permalink:"/nitmod/blog/nitmod-2.3.2_20210131"}},o={authorsImageUrls:[void 0]},a=[{value:"Changelog",id:"changelog",level:2}],c=({children:e})=>{const s=Object.assign({span:"span"},(0,i.ah)());return(0,r.jsx)(s.span,{style:{color:"#25c2a0"},children:e})},x=({children:e})=>{const s=Object.assign({span:"span"},(0,i.ah)());return(0,r.jsx)(s.span,{style:{color:"#1877F2"},children:e})},h=({children:e})=>{const s=Object.assign({span:"span"},(0,i.ah)());return(0,r.jsx)(s.span,{style:{color:"#CA1111"},children:e})},j=({children:e})=>{const s=Object.assign({span:"span"},(0,i.ah)());return(0,r.jsx)(s.span,{style:{color:"#FFBA00",fontSize:"smaller"},children:e})};function m(e){const s=Object.assign({h2:"h2",p:"p",strong:"strong",br:"br",div:"div"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Linux 64-bit support (client + server)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"macOS 64-bit support (client)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Support for Omni-Bot 64 bit (if server is running x86_64)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Missing class menus files"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:'"mod_build" serverinfo cvar'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Build CPU type in !about output, crashlogs, G_InitGame"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsxs)("small",{children:['Don\'t use "screenshotJPEG" when using ET',(0,r.jsx)(s.div,{})," and cg_useScreenshotJPEG = 1"]}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"!about now shows buil-in SQLite API version"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:'"humans" statusResponse key (used by UI serverlist)'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Ingame serverlist will now hide serverfacades and server returning no or invalid statusResponse"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"cg_pmSounds: 0 - Disable sound notification for PM/Adminchat | 1 - Enable"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsxs)("small",{children:['Ingame serverlist now displays real human counts based on statusResponse "humans" key (also compatible with ET',(0,r.jsx)(s.div,{}),' "humans" infoResponse key, if server and client are running ET',(0,r.jsx)(s.div,{}),". Otherwise based on ping)"]}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Experimental widescreen support for UI and modified menu files accordingly"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(h,{children:"Removed:"})})," ",(0,r.jsx)("small",{children:"macOS PPC support"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(h,{children:"Removed:"})})," ",(0,r.jsx)("small",{children:"macOS 32.bit support"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(h,{children:"Removed:"})})," ",(0,r.jsx)("small",{children:'Ingame serverlist "TR" column'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(j,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Built-in SQLite Interface updated to version 3.35.5 (previously 3.8.5)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(j,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"g_hitboxes now doesn't uses any extra entities"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(j,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Code cleanup and fixed many compiler warnings"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(j,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Code optimizations for faster game frame processing"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"cg_autoaction demo recording, for good"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:'"Wounded names" were sometimes drawn for current player when dying'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Potential bug where CG_RegisterClients would fail on connect/vid_restart/map_restart, resulting in missing players info until their userinfo was changed"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Potential (unconfirmed) client crash/freeze when connecting/switching maps"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:'"EV_BULLET_HIT_WALL" on players bbox with g_hitboxes enabled'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"cg_autoaction stats dump generating bad file/folder names"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"g_GUIDChecks could potentially allow players with an invalid/spoofed NGUID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"First poison hit had no effect on teammates if g_friendlyFire flag 2 (half damage) was set"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Revive hitbox height was sometimes wrong, revives should be easier now"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"revive/knife/poison hitbox height was too small with g_hitboxes enabled"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Self poisoning with g_hitboxes enabled"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Flackjecket powerup didn't reduce tripmine damage taken"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"some commands feedback typos"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Players sometimes respawning in enemy spawnpoints when none were available (on servers with a lot of players)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Loading 'levels.db' instead of 'votes.db' after automatically creating default 'votes.db' if it didn't exist"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:'Potential server crash with error message "nitrox_CSIndex: overflow" due to alternative configstrings system introduced in version 2.2 (never reported, but happened on the test server a few times)'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"et_ClientUserinfoChanged LUA callback was sometimes not called"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:'LUA et.gentity_get "sess.muted" field was always returning -1'}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"NxAC Faster screenshot file transfer"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"NxAC Fixed empty/black/corrupted screenshots"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"NxAC bug where it could ban bots/players connecting after another player was automatically banned"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(x,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"NxAC bug where a player could escape an automatic ban if the server was still waiting for the auto screenshot"})]})]})}const g=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},1151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>l});var r=n(7294);const i=r.createContext({});function l(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||t:l(e),r.createElement(i.Provider,{value:d},s)}}}]);