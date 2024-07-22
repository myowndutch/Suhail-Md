const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349030547659";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_47_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRlJPTWR6c1V0bkJCOE5JS2h3TnBkTy9ZbmxlYWhwTHcvUlVGSUxDK05LTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMwNTQ3NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNzNEQjQ4NjlEQjI2OTU2OTQ1NDEwRkFDMkI2RkUzRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2MDkyNDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMwNTQ3NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjBCMkI1NENCOUNBOTg2N0YyNjExMkRDRTA5OTJFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2MDkyNDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHd5LVozWEVSVHlCUEZNZlRfM2VjUVwiLFxuICBcInBob25lSWRcIjogXCJlMjM5NzY2Yy1mNjM5LTRkZmItYjc3MS05NTNjYzUyYWU4ODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyNTMsXG4gICAgICA1OCxcbiAgICAgIDIxMSxcbiAgICAgIDEwLFxuICAgICAgMjE4LFxuICAgICAgMTMyLFxuICAgICAgMjQyLFxuICAgICAgMTQ2LFxuICAgICAgMjQ4LFxuICAgICAgMjI5LFxuICAgICAgODYsXG4gICAgICA5NixcbiAgICAgIDIxLFxuICAgICAgMTkxLFxuICAgICAgMTE5LFxuICAgICAgMTkwLFxuICAgICAgMjAyLFxuICAgICAgMTcsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICA5MCxcbiAgICAgIDE2NixcbiAgICAgIDExMixcbiAgICAgIDI0NixcbiAgICAgIDE0MixcbiAgICAgIDExMCxcbiAgICAgIDE2MSxcbiAgICAgIDE3NyxcbiAgICAgIDg1LFxuICAgICAgMTE3LFxuICAgICAgMTkyLFxuICAgICAgNjUsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICA3MCxcbiAgICAgIDQ1LFxuICAgICAgMTU1LFxuICAgICAgMjA4LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhIWEdCWUc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMwNTQ3NjU5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQ0Nzk2MjA3OTI2NToyN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOt8J2TvvCdk73wnZOs8J2TsfCdk63wnZO08J2TsvCdk7fwnZOw8J+RkfCfkZHwn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZKN1lrQkVKWFk5clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHeitMYUVlWmN1MitycS9rUENPQzArV0xpbEpTMUVmKzRCbjVPVU1nWUFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFwV2Z1SlpyQzl3RXA3bDlyZkQvcXpNRGY0S1FkSjdFdERlSlZCSnhkRHdtelQvcGZObE9PbmV6N2tWbWFPMW5mazBsY3RXWmZ4TEJhZ1k3MEdFWUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpsbG41UmJDdEo1NVNFamdxWGNjb0NPcjFPb1hqVlREQ3FhRXMzU1BPT1ViSkFIUUs3bnJkNmxXYi9XbWdqa2VxeWFYZVpCYjZFOERjMEZsQVJtdURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzA1NDc2NTk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MDkyNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWWFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJZYS5qc29uIjogIntcImtleURhdGFcIjpcImxuYXcxOTcwS1o5alRnY2FPU0NiS2VwT2tpOCtKVjN1SzBiTDNBNGJWMjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg5MTA1MDgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NjcxOTA5ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "dutchdking-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "dutchdking",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
