const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function LUCKY_MD_XFORCE_PAIR_CODE() {
        const { version } = await fetchLatestBaileysVersion();
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);

        const buttons = [{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "Visit Website",
      id: `🌐 Wa Channel`,
      url: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u" 
    })
  },{
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
      display_text: "📑 Copy Session",
      id: `copy`,
      copy_code: "https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u"
    })
    }];

        
        try {
            let Pair_Code_By_Fredi_Ezra = makeWASocket({
                version,
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Safari'),
                syncFullHistory: false,
                connectTimeoutMs: 60000,
                keepAliveIntervalMs: 30000
            });

            if (!Pair_Code_By_Fredi_Ezra.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Fredi_Ezra.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_Fredi_Ezra.ev.on('creds.update', saveCreds);
            Pair_Code_By_Fredi_Ezra.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === 'open') {
                    await delay(50000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(8000);
                     let AUDIO_URL = "https://files.catbox.moe/hhw2a6.mp3"; // New audio URL
                    let img = "https://files.catbox.moe/cvd9sb.jpg";              
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Pair_Code_By_Fredi_Ezra.sendMessage(Pair_Code_By_Fredi_Ezra.user.id, { text: '' + b64data });

                    let LUCKY_MD_XFORCE_TEXT = `
*NJABULO JB CONNECTED*  
--------------------------

📱 *tanks you pair*

🎡 *top*

😎 _Pσɯҽɾԃ Ⴆყ ɳʝαႦυʅσ ʝႦ_
`;
                    
    await Pair_Code_By_Fredi_Ezra.sendMessage(Pair_Code_By_Fredi_Ezra.user.id, {   
        interactiveMessage: {
     image: { url: img },
     caption : LUCKY_MD_XFORCE_TEXT,
      buttons: buttons
      headerType: 1
      }
      }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

      await Pair_Code_By_Fredi_Ezra.sendMessage(Pair_Code_By_Fredi_Ezra.user.id, {
     audio: { url: AUDIO_URL }, 
     mimetype: 'audio/mp4', 
     ptt: true
    }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

                    
                    await delay(100);
                    await Pair_Code_By_Fredi_Ezra.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LUCKY_MD_XFORCE_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('service restated');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Unavailable' });
            }
        }
    }

    return await LUCKY_MD_XFORCE_PAIR_CODE();
});

module.exports = router;
