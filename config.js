/*
WHATSAPP BOT BY EXCEL OTTAH 
WHATSAPP - 2347039570336
SUPPORT GROUP - https://t.me
YOUTUBE - http://youtube.com
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '2347039570336'

global.OWNER_NAME = 'EXCEL'

global.TIMEZONE = 'Africa/Lagos' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝛯𝛸𝐶𝛯𝐿'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@EXCEL 🥷' //sticker

global.FOOTER = '𝛯𝛸𝐶𝛯𝐿 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '!' // Bot Prefix

global.CAPTION = '𝛯𝛸𝐶𝛯𝐿  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/38b2287de9e0f6b8ecab1.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/HBCXDp3HIb8GzHBBg6MplO' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = false

global.AUTO_REPLY = false

global.VOICE_REPLY = false


/* V card */

global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: excelottah6" //ur github or insta name
global.location = "Nigeria, delta" //ur location

