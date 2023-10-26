"use strict";(self.webpackChunknitmod=self.webpackChunknitmod||[]).push([[3107],{4018:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=a(5893),r=a(1151);const s={sidebar_position:4,id:"nxac",title:"NxAC",hide_title:!1,hide_table_of_contents:!1},i=void 0,l={id:"nxac",title:"NxAC",description:"What is NxAC?",source:"@site/docs/nxac.md",sourceDirName:".",slug:"/nxac",permalink:"/nitmod/docs/nxac",draft:!1,unlisted:!1,editUrl:"https://github.com/sebdanielsson/nitmod/edit/main/docs/nxac.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"nxac",title:"NxAC",hide_title:!1,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Cvar Reference",permalink:"/nitmod/docs/cvar-reference"}},c={},o=[{value:"What is NxAC?",id:"what-is-nxac",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Enable NxAC",id:"enable-nxac",level:3},{value:"Automatic kick violations",id:"automatic-kick-violations",level:4},{value:"CVAR Scanner",id:"cvar-scanner",level:3},{value:"Options",id:"options",level:4},{value:"Rules",id:"rules",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"what-is-nxac",children:"What is NxAC?"}),"\n",(0,t.jsx)(n.p,{children:"NxAC is N!tmod's anti-cheat tool and was officially released in version 2.3. It's built-in to the mod and just needs to be configured."}),"\n",(0,t.jsxs)(n.p,{children:["By default, NxAC will automatically report violations to everyone on the server, request a screenshot and kick/ban the cheater.\nEvery violation will be logged into the ",(0,t.jsx)(n.code,{children:"nitmod/NxAC/NxAC_Violations.log"})," file."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"enable-nxac",children:"Enable NxAC"}),"\n",(0,t.jsxs)(n.p,{children:['If you want your server to automatically kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the ',(0,t.jsx)(n.a,{href:"cvar-reference#n_nxac",children:"n_NxAC"})," to 1 in your server config.",(0,t.jsx)(n.br,{}),"\n",'If you want your server to automatically request a screenshot, kick/ban cheaters, and be listed as a "cheat protected" server, you have to set the ',(0,t.jsx)(n.a,{href:"cvar-reference#n_nxac",children:"n_NxAC"})," to 2 in your server config."]}),"\n",(0,t.jsxs)(n.p,{children:["This is a latched cvar, which means you will have to restart the map, or wait for the next map, before changes take effect.\nOnce this cvar is enabled, NxAC server will automatically take actions when it detects a violation.\nIf the ",(0,t.jsx)(n.a,{href:"cvar-reference#n_nxac",children:"n_NxAC"}),' cvar is set to 0, it will ONLY broadcast the violation to everyone on the server and the server will NOT be listed as a "cheat protected" server.']}),"\n",(0,t.jsx)(n.h4,{id:"automatic-kick-violations",children:"Automatic kick violations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"UNKNOWN_CLIENT_BINARY" - NxAC has detected that this player is using an ET client that is not allowed on the server, because its SHA1 checksum wasn\'t found inside the "NxAC/checksums.cfg" file.'}),"\n",(0,t.jsx)(n.li,{children:'"SUSPICIOUS MEMORY MODULE" - NxAC has detected a bad memory module loaded onto the game. In other words, this is a hack...'}),"\n",(0,t.jsx)(n.li,{children:'"UNEXPECTED CVAR SCAN DATA" - NxAC Server has received an unexpected response to a Cvar Scan query.\nAutomatic PERMANENT ban for these violations (Undeniable evidences of cheating):'}),"\n",(0,t.jsx)(n.li,{children:'"WALLHACK" - NxAC has detected the player is using a Wallhack.'}),"\n",(0,t.jsx)(n.li,{children:'"GAMEHACK" - NxAC has detected the player\'s game has been hacked.\nThese violations will only trigger a public announce:'}),"\n",(0,t.jsx)(n.li,{children:'"SCREENSHOT FAILURE" - A screenshot request has been sent to this player, and it failed.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cvar-scanner",children:"CVAR Scanner"}),"\n",(0,t.jsx)(n.p,{children:"NxAC can scan clients to find cvars that should not be registered in the game (usually known cheat cvars) or find CVARS with bad values.\nTo enable this feature, you must install a list of cvar rules on the server, and enable some cvars in your server config."}),"\n",(0,t.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"cvar-reference#n_NxAC_CvarScan",children:"n_NxAC_CvarScan"}),': Set this CVAR to 1 to enable NxAC CVAR Scanner (Default: "0")',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"cvar-reference#n_NxAC_CvarScanWait",children:"n_NxAC_CvarScanWait"}),': Delay in milliseconds before server starts sending cvar queries to a client after he has finished connecting (Default: "10000")',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"cvar-reference#n_NxAC_CvarScanDelay",children:"n_NxAC_CvarScanDelay"}),': Delay in milliseconds between each cvar query. Too short might cause lags or server command overflow (Default: "750")',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"cvar-reference#n_NxAC_CvarScanInterval",children:"n_NxAC_CvarScanInterval"}),': Delay in milliseconds before starting a new scan after the previous one has finished (Default "300000")',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"cvar-reference#n_NxAC_CvarScanMaxWarnings",children:"n_NxAC_CvarScanMaxWarnings"}),': Maximum number of warnings before kicking a player who doesn\'t respect the cvar rules. Instant kick if set to 0. (Default: "1")']}),"\n",(0,t.jsx)(n.h4,{id:"rules",children:"Rules"}),"\n",(0,t.jsx)(n.p,{children:"The syntax for a CVAR Scanner depends of what type of rule is used, and can look like:"}),"\n",(0,t.jsxs)(n.p,{children:["CVARNAME RULE VALUE (EQ, G, L, INC and EXC rules)",(0,t.jsx)(n.br,{}),"\n","CVARNAME RULE VALUE1 VALUE2 (IN, OUT, GE and LE rules)",(0,t.jsx)(n.br,{}),"\n","CVARNAME RULE (NULL rule)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'EQ "val": Cvar value must be EQUAL to val'}),"\n",(0,t.jsx)(n.li,{children:'IN "val1" "val2": Cvar value must be INSIDE val1 and val2'}),"\n",(0,t.jsx)(n.li,{children:'OUT "val1" "val2": Cvar value must be OUTSIDE val1 and val2'}),"\n",(0,t.jsx)(n.li,{children:'G "val": Cvar value must be GREATER than val'}),"\n",(0,t.jsx)(n.li,{children:'GE "val": Cvar value must be GREATER than val or EQUAL to val'}),"\n",(0,t.jsx)(n.li,{children:'L "val": Cvar value must be LOWER than val'}),"\n",(0,t.jsx)(n.li,{children:'LE "val": Cvar value must be LOWER than val or EQUAL to val'}),"\n",(0,t.jsx)(n.li,{children:'INC "val": Cvar value must INCLUDE (must contain) val'}),"\n",(0,t.jsx)(n.li,{children:'EXC "val": Cvar value must EXCLUDE (must not contain) val'}),"\n",(0,t.jsx)(n.li,{children:"NULL: Cvar must not exist, at all"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to search for known hack cvars only. We do not recommend scanning for engine cvars or other original game cvars (r_",(0,t.jsx)(n.em,{children:", cl_"}),", cg_",(0,t.jsx)(n.em,{children:", in_"}),' etc...).\nIf you want to restrict "normal" cvars, you should use N!tmod\'s forcecvar and sv_cvar features instead.']}),"\n",(0,t.jsxs)(n.p,{children:["Here is a ",(0,t.jsx)(n.a,{target:"_blank",href:a(5033).Z+"",children:"cvarlist-sample.cfg"}),". The cvarlist should be saved as ",(0,t.jsx)(n.code,{children:"nitmod/NxAC/cvarlist.cfg"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5033:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/files/cvarlist-sample-e9eb4a9eab3b4383a0e57850fa5f2d25.cfg"},1151:(e,n,a)=>{a.d(n,{ah:()=>s});var t=a(7294);const r=t.createContext({});function s(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);