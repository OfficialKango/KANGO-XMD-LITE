//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJWbDUzNm1rdi9SaDBFbDZxRElodlQwTDM3c2JaN1JhSnZQdkt0U1EzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1JZVWtiR25Tem1FS3hyTTdxczdmVW9ibU9tejI5Yll3T3l6bVdqNXNoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjg1aHB2Q3E3Mm5neUxiSWo5Q1lMNThrK1A4bm9sQVgvenBxU0N3ZlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyL0dHdG1vMExWVXNKVlR1VDEzVzBjRXlzZUtOVU5sNnptbFI4RzB4TmhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMK3VsL1FBK3NYdjNFMEx5eGJBVkN2cUZlVWtOVjFNVnZVdEkxUDU4WDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklYeWZnY29vU3RNd2FzQ2pOR2o5dmJ2aHNtQ3lsbUUxbGtyUG85VmxtMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEoxa0hUeTFQVVVtdDQ5SVE3SzNJMEMzY2dIb0RJdTcwTzFweFNaK3dXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzFhb2s2YUIrVUpDOVhJQ2xQNmtEcGhydzRVSG5OZzNjS1FxQ054V1gzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFvaGwyWlV6aUg5aUZCR29QYnpseXM3YXI1LzIyMTM5VzJCTXliZGttZndnT1YxcGlyaS9vVURHMGNYQ3I3VjMrTExGeWkxRFFTMnBGc3V2ZUFWU0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IllWeWFlTHFXUGZHZjJ6SWt4c0w5RnBDRWp1dEZoVEExRmtCcHpodG5VcFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3NTk1OTUzNDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzc3MjczOEQxMkNFRDMyOUQ4RTYwMTAzM0I0QjBFQSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1MTM4NjYwfV0sIm5leHRQcmVLZXlJZCI6ODE0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE0LCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFDR05SQkNRIiwibWUiOnsiaWQiOiI5MTc1OTU5NTM0Nzk6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc2NjMxMzYwMTU5ODA5OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWDIwcVFERU5IQjE4a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6ZnZQUTkrMVVMemdoUWkrajVVRkVyQXhMWDZ1NFgwWVJJMW9tOGNIeXdjPSIsImFjY291bnRTaWduYXR1cmUiOiJXZDF3UmY2Vmg2QmR6S3BNVjJCa0hvL2d3M2N3TWJOZ0NESis3ZGZGV0tteWExMEhHa1BlT2dqUk9DbXRjV09VKzZVcnBDMFYwVE05VW1QR0M1UmdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieS95VVp4RHJVeUV1TTRsWHRqeW1pK0RnOC8reWVUMC8ydFlDSHFJUjRhUXV2dFc4RHFjTXphenhEcnhLOC9Rd2VjaWRlNEZZSXl5bmtma1h5Z3kwQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI3NjYzMTM2MDE1OTgwOToxQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMzd6MFBmdFZDODRJVUl2bytWQlJLd01TMStydUY5R0VTTmFKdkhCOHNIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlFnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjUxMzg2NTUsImxhc3RQcm9wSGFzaCI6IkM0ZkpOIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBS3MifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
