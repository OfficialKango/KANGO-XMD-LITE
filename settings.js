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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VuS05sTFFMdjJTdm5vM0RQNHBJV3ozVHJmc3oyL1FKSktsYStvd3EyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFJ3SkRHMklFbnBJKytCYVEyNGZsVzR1NFVuYnFYWGVBZUpJcTZoRUcxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ3VsYXpnWUkzcGNxU3IyUkt3TmNObFhwNUc4WEF0UnN2UVVVeG9xQm5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGakZkSU5HdlRua1hSU3dJTU5TUGZzOWtOeWpWUlNRZkRER0k3cHVDOTJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGMjFIeHBiQ1BCaTBwWkNKUDZ1Vlg3NDc2THd0b1FuMTcwV0xabkR6Rjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlxRnpNY1ovTFhDdE1YdEhYSlUxN0RhdXJEMDVoT0dvUXR6Rjc5MklreDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU83UFpZSUtMczJ5Vk9Kb1VXWWl5TlVnTi9FbTRUMFNTdEprT3dxUVlWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFh6RUpNVmhzcndUK1BBZEZHdU9pVDFMTGFvOW1wbTJxRld2Q1lWRkhVND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEekhMYUQwaW1IZXgzOTN5TzdDbXdlSFRDZW15UDZJTE4yemNuZi9JRWI3bnZiVU1yQlRISmthOWlETEw3NVFoT05rYXZNeVdVWGZmekZhU3poTUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6Ilg4UXdVN0t1NjZhWk5FcUZQcGdtNXBlN0dYSzR4eGNzWmsvUHNhRnFRaVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDQ4MjAyNDg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNURFRkI4MDg2NjkyQjZERkY0NjRDNThDRDU0NDAyMyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0OTI4MTY3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNDgyMDI0ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MTJDMDY0MTQ5NkEyN0RCQjRGRTI3RTJENjA4OEYyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ5MjgxNjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA0ODIwMjQ4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVDNDFCMzAwQ0FBNDVFOURCNzBBNTVENUZEQkFBRUQiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDkyODE2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDQ4MjAyNDg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTMxNTE3RTdDNTAxRTUxNThGNDkyMDkyM0QyMkU4NiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0OTI4MTY5fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhYMkI1MVdCIiwibWUiOnsiaWQiOiI5MjMwNDgyMDI0ODk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJQlJBSElNIiwibGlkIjoiMTU0NjEwODg3MDczODI5OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMV0RrUElERUpYVnlza0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkdDNrcTFnWGVCaVhyVEJTMC9UeUtlRzJxK2tyc0ZyZ2tNYVJBSDZTVEVnPSIsImFjY291bnRTaWduYXR1cmUiOiIvTXNKWFphTE04dHZiMU1KeTBTc2I3S0twamJvbFNIcTJYTVptaCtDbFFOV3E0MGpwZTc2d2UrbWUzQ1p6RWNXcGU3aG5zWmQxL1NHYmtKSUNnK25BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjNjRHRyb2hrR1lBT0I5QzhHYVd5dHA4L2dXOTBzeWliVExuYnF5Wjd4OGFxa1dYc1hrMUF2ZU1hQm11WjYyWVJCVVdPR3hEMGp0aG1oTUZ0NzhyQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTQ2MTA4ODcwNzM4Mjk6MUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGJkNUt0WUYzZ1lsNjB3VXRQMDhpbmh0cXZwSzdCYTRKREdrUUIra2t4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0OTI4MTY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1EciIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9' 
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
