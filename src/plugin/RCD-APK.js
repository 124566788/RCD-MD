import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
const ownerNumber = '94753574803@s.whatsapp.net';
import config from '../../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600));
const hours = Math.floor((uptime % (24 * 3600)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

// Uptime message
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
    }
  }
  const selectedId = selectedListId || selectedButtonId;

  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['apk', 'dexter-modz', 'owner'];

  if (validCommands.includes(cmd)) {
    const msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ʀᴄᴅ-ᴍᴅ*
│📍 ᴠᴇʀꜱɪᴏɴ: 2.1.0
│👨‍💻 ᴏᴡɴᴇʀ : *ʀᴄᴅ ᴛᴇᴀᴍ*      
│👤 ɴᴜᴍʙᴇʀ: ${ownerNumber}
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴘʀᴇғɪx: [${pref}]
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴄᴅ-ᴍᴅ"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({ video: fs.readFileSync('./src/RCD-APK.mp4') }, { upload: Matrix.waUploadToServer })),
              title: '',
              gifPlayback: true,
              subtitle: "𝗗𝗘𝗫𝗧𝗘𝗥 𝗜𝗗 🔎",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "ALIVE ?",
                    id: `${prefix}alive`
                  })
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "BOT INFO ❔",
                    id: `BOT INFO`
                  })
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "MENU LIST ❔",
                    id: `${prefix}menu`
                  })
                },
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "ᴛᴀᴘ ʜᴇʀᴇ ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ",
                    sections: [
                      {
                        title: "ᴅᴇxᴛᴇʀ ᴍᴏᴅᴢ ᴀɴᴅ ᴀᴘᴋ ʟɪꜱᴛ",
                        highlight_label: "ᴀʟʟ ᴍᴇɴᴜ",
                        rows: [
                          {
                            header: "𝗗𝗘𝗫𝗧𝗘𝗥 𝗜𝗗 🔎",
                            title: "ᴡʜᴀᴛꜱᴀᴘᴘ ʟɪɴᴋ ᴅᴇᴠɪᴄᴇ ꜱᴘᴀᴍ ᴀᴘᴋ",
                            description: "ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴᴅ ꜱᴇɴᴅ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ ᴀʟᴇʀᴛ",
                            id: "Apk 1"
                          },
                          {
                            header: "𝗗𝗘𝗫𝗧𝗘𝗥 𝗜𝗗 🔎",
                            title: "𝐒𝐀𝐕𝐄 𝐈𝐃",
                            description: "ᴡʜᴀᴛꜱᴀᴘᴘ ɴᴜᴍʙᴇʀ ᴀᴜᴛᴏ ꜱᴀᴠᴇ ᴀᴘᴋ",
                            id: "Apk 2"
                          }
                        ]
                      }
                    ]
                  })
                }
              ]
            }),
            contextInfo: {
              mentionedJid: [ownerNumber],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363286758767913@newsletter',
                newsletterName: "RCD-MD WHATSAPP CHANNEL",
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, {});

    await Matrix.relayMessage(m.from, msg.message, {
      messageId: msg.key.id
    });
  }

  if (selectedId === "Apk 1") {
    const str = `*hey ${m.pushName}* 
        
*𝗗𝗘𝗫𝗧𝗘𝗥 ┃ MODZ LINK DEVICE SPAM APK* ♨

*https://rb.gy/v1yd7v*

*[ DOWNLOAD APK AND ENJOY ]*

*https://youtu.be/uswlmvJkv9A?si=aFJVpKApQB5wx4Lp*

*[ WATCH TUTORIAL VIDEO 📽️ ]*

*DEXTER MODZ ANDROID APK*
  `.trim();
    return m.reply(str);
  }

  if (selectedId === "Apk 2") {
    const str = `*hey ${m.pushName}* 
        
*𝗗𝗘𝗫𝗧𝗘𝗥 ┃ WHATSAPP NUMBER AUTO SAVE APK* ♨

*https://rb.gy/h0vixu*

*[ DOWNLOAD APK AND ENJOY ]*

*https://youtu.be/uswlmvJkv9A?si=aFJVpKApQB5wx4Lp*

*[ WATCH TUTORIAL VIDEO 📽️ ]*

*DEXTER MODZ ANDROID APK*
  `.trim();
    return m.reply(str);
  }
};

export default test;
