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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254724252618";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 
SUHAIL_10_37_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMm5uNGVpenJvd3Q4bWVnT29JaVpEZm9Nc3JzektOVE1GZFpuWTlVc28rbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjQyNTI2MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2QzE3NDdERkRFMkNEQjEyRkUxN0YyRjNGNkY4QUREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDA4OTQ2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCTnZXUHFWU1RHcWJGdHFIazlDUWFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiNmFjMTk4LTRmNGMtNGM4Ny1hYTMyLTUzMzI1MTY0NzRjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICA0MSxcbiAgICAgIDUzLFxuICAgICAgMTgzLFxuICAgICAgMjUxLFxuICAgICAgMTk2LFxuICAgICAgMzcsXG4gICAgICAxOTMsXG4gICAgICAzMixcbiAgICAgIDIwNyxcbiAgICAgIDc2LFxuICAgICAgMTA5LFxuICAgICAgMjM1LFxuICAgICAgMjQwLFxuICAgICAgMTA0LFxuICAgICAgMTM1LFxuICAgICAgMTEsXG4gICAgICAxOTUsXG4gICAgICAxNDcsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgNjEsXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDI0NyxcbiAgICAgIDIzMCxcbiAgICAgIDI1LFxuICAgICAgOTYsXG4gICAgICA4OCxcbiAgICAgIDIxMyxcbiAgICAgIDE4OCxcbiAgICAgIDIwMSxcbiAgICAgIDE1OCxcbiAgICAgIDYsXG4gICAgICAyMjYsXG4gICAgICA0NCxcbiAgICAgIDcwLFxuICAgICAgOTksXG4gICAgICAxMzYsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMjg2V1BNUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI0MjUyNjE4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHaWZ0cGFsbGF2aVwiLFxuICAgIFwibGlkXCI6IFwiMTUxMjU2MjQ5MTg4NTcwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBTK3VRRUVQTDJtYlFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2VzlKRGZHVHdQWkpaN21DZ0hzOG1EaFoxRjNnb3ZTVUlGNjA0ZGhTRjN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUxRUhpbHBXR2g5dERYK3NlUHc3dWtCZVQzSUhxekcxSnBtZnUraERkMWNvUkR5bGxRZ3FoS1U3LzF5YjRBc29TMTZ3aDVNbDJzY05kS21KdC9Ma0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5zWXpiV3BQc1FYN1ltaUhJN0syNFVSbzNBajJWY2ZiWWRYNHJzYjBMVE1UaDViSjNqK1FBZlpzYmgyOTNsM3FwaVFUOHMycTY4YklTc0pHNHE2M2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNDI1MjYxODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4OTQ2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVd6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0x2dW5ST2NhVDl2ejBMT29HZi9DMzFFNHk1R250R09WQjRpOGFZOFZ4Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg1NDY2Mzg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
