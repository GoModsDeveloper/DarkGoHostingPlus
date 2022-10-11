
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const xfarr = require('xfarr-api')
const maker = require('mumaker')
const FormData = require('form-data')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ttdown = require('./lib/tt')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash } = require('./lib/myfunc')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')

const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')

const { TelegraPh } = require ('./lib/uploader')
const hit = JSON.parse(fs.readFileSync('./lib/db/dash.json'))

const { color } = require("./lib/color")

const ban = JSON.parse(fs.readFileSync('./lib/db/ban.json'))
const afk = JSON.parse(fs.readFileSync('./lib/db/afk.json'))
const game = JSON.parse(fs.readFileSync('./lib/db/game.json'))
const cmdmedia = JSON.parse(fs.readFileSync('./lib/db/cmd.json'))
const users = JSON.parse(fs.readFileSync('./lib/db/user.json'))
const email = JSON.parse(fs.readFileSync('./lib/db/email.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/db/respon.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
fatihgan = fs.readFileSync('./lib/assets/logo.jpg')
butong1 = [{   
    quickReplyButton: {
        displayText: 'BACK TO MENU',
        id: 'menu'
    }  
 }, {
    quickReplyButton: {
        displayText: 'SUPORT BOT',
        id: 'donasi'
 }
                                
 }]
serial = generateHash(20)

const kuismath = game.math = []
const _family100 = game.family100 = []
const tebakkata = game.tebakkata = []
const tebakbendera = game.tebakbendera = []
const siapaaku = game.siapaaku = []
const tebakkalimat = game.tebakkalimat = []
const caklontong = game.caklontong = []
const susunkata = game.susunkata = []
const tekateki = game.tekateki = []
const tebakkabupaten = game.tebakkabupaten = []
const tebakkimia = game.tebakkimia = []
const tebaklirik = game.tebaklirik = []
const tebaktebakan = game.tebaktebakan = []


module.exports = kurr = async (kurr, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = kurr.user.id ? kurr.user.id.split(":")[0]+"@s.whatsapp.net" : kurr.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const arg = budy.slice(command.length + 2, budy.length)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    const isNumber = x => typeof x === 'number' && !isNaN(x)
	    
        const from = mek.key.remoteJid
        const isGroup = m.chat.endsWith('@g.us')
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const groupMetadata = m.isGroup ? await kurr.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               m.reply('*L I N K  D E T E C T*\nGood Bye👋🏻')
               let sianj = m.sender
               await kurr.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
        for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					m.reply(commandsDB[i].balasan)
				}
			}
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date
    let hari = o.toLocaleDateString(locale, { weekday: 'long' })
    let yoi = o.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
        if (!kurr.public) {
            if (!m.key.fromMe) return
        }
        /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    kurr.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: kurr.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            kurr.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        const textTemplateButtons = (from, text, footer, buttons) => {
            return kurr.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        } 
        if (ban[m.sender] && isCmd) {
            await kurr.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }
        
        const adduser = (sender, pushname) => {
            const obj = { id: sender, name: pushname, }
            users.push(obj)
            fs.writeFileSync('./lib/db/user.json', JSON.stringify(users))
        }
        const cekuser = (sender) => {
            let status = false
            Object.keys(users).forEach((i) => {
                if (users[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isUser = cekuser(sender)
        
        const addmail = (text) => {
            const obj = { email: text, }
            email.push(obj)
            fs.writeFileSync('./lib/db/email.json', JSON.stringify(email))
        }
        const cekmail = (text) => {
            let status = false
            Object.keys(email).forEach((i) => {
                if (email[i].email === text) {
                    status = true
                }
            })
            return status
        }
        const checkEmail = cekmail(text)
        
        try {
let users = afk[m.sender]
if (typeof users !== 'object') afk[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else afk[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
} catch (err) {
console.log(err)
}
	for (let jid of mentionUser) {
let user = afk[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
`.trim())
}

if (afk[m.sender].afkTime > -1) {
let user = afk[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
`.trim())
user.afkTime = -1
user.afkReason = ''

}

        kurr.sendReadReceipt(m.chat, m.sender, [m.key.id])
        kurr.sendPresenceUpdate('composing', m.chat)
        if (isCmd && !isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        // Func dashboard
        let words = ["menu","owner","ytmp3","ytmp4","tiktok","s","sticker","dash","help","toimg","anonymous","dashboard","anonymous","start","leave","tiktok","yt","ttaud","ttvid","tahta","nulis","pinterest"]

if (isCmd && !m.isBaileys) {
try {
hitp = words.filter(suu => suu === command)
if (hitp[0] === command) {
hit.push({ sender: m.sender, cmd: command })
fs.writeFileSync('./lib/db/dash.json', JSON.stringify(hit))
}
} catch(err) {
console.log(err)
}

      }
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kurr.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kurr.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kurr.ev.emit('messages.upsert', msg)
        }
	    
	if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (('family100'+m.chat in _family100) && isCmd) {
	    kuis = true
	    let room = _family100['family100'+m.chat]
	    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
	    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
	    if (!isSurender) {
	        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
	        if (room.terjawab[index]) return !0
		room.terjawab[index] = m.sender
	    }
	    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
	return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}

${isSurender ? '' : ``}`.trim()
	    kurr.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
	    if (isWin || isSurender) delete _family100['family100'+m.chat]
	}
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`)
                delete siapaaku[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        switch(command) {
        case 'menu':
                    Anu = `
▬▭▬▭▬▭▬▭▬▭▬▭
『 🤖 BOTZ WEB 🤖 』
┏━━
┣🤖 ${prefix}web1
┣🤖 ${prefix}web2
┣🤖 ${prefix}web3
┣🤖 ${prefix}web4
┣🤖 ${prefix}web5
┣🤖 ${prefix}web6
┣🤖 ${prefix}web7
┣🤖 ${prefix}web8
┣🤖 ${prefix}web9
┣🤖 ${prefix}web10
┗━━
▬▭▬▭▬▭▬▭▬▭▬▭
`
let btn = [{
    quickReplyButton: {
            displayText: 'SCRIPT',
            id: 'subs'
        } 
      
 }]
fatihgans = fs.readFileSync('./lib/assets/logo.jpg'), 
kurr.send5ButImg(m.chat, Anu, ` 『⫹⫺𝐃𝚫𝐑𝐊𝐆𝐎 𝐌𝚫𝐊𝚵𝐑⫹⫺』 `, fatihgans, btn)
break
//=================================================//
case 'subs':
m.reply(`SCRIPT\nCHAT : https://wa.me/6287771040100?text=Beli+Script+Botz+Web+Bang+Harga+Nya+50k`)
break
//=================================================//
case 'simplemenu':
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`
▬▭▬▭▬▭▬▭▬▭▬▭
『 🤖SIMPLEMENU🤖 』
┏━━
┣🤖 ${prefix}web1
┣🤖 ${prefix}web2
┣🤖 ${prefix}web3
┣🤖 ${prefix}web4
┣🤖 ${prefix}web5
┣🤖 ${prefix}web6
┣🤖 ${prefix}web7
┣🤖 ${prefix}web8
┣🤖 ${prefix}web9
┣🤖 ${prefix}web10
┗━━
▬▭▬▭▬▭▬▭▬▭▬▭
   CREATED DARKGO
▬▭▬▭▬▭▬▭▬▭▬▭
NOTE : SIMPLE MENU SPECIAL BUAT YANG MENU NYA GAK MUNCUL`)
break
//=================================================//
case 'servermenu':
if(from != "120363025104396984@g.us") return m.reply("undefined")
m.reply(`
▬▭▬▭▬▭▬▭▬▭▬▭
『 🤖SERVERMENU🤖 』
┏━━
┣🤖 ${prefix}listsubdomain
┣🤖 ${prefix}subdomain1
┣ Example Use : subdomain1 dark|666.666.666
┣━━
┣🤖 ${prefix}subdomain2
┣ Example Use : subdomain2 dark|666.666.666
┣━━
┣🤖 ${prefix}termint
┣ Example Use : termint dark
┣━━
┣🤖 ${prefix}hidetag
┣ Example Use : hidetag dark
┗━━
▬▭▬▭▬▭▬▭▬▭▬▭
      CREATED DARKGO
▬▭▬▭▬▭▬▭▬▭▬▭
NOTE : SERVERMENU SPECIAL SERVER`)
break
//=================================================//
case 'web1': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\nWeb: https://7p4e85hgo.mediaflare.biz/?id=afdd44e1\nSetting: https://867779.mediafirex.xyz/60c077a937c1db2dc4cc7301e09db6b4.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web2': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0\nSetting : https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web3': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://34j077c233e1dd8.xmediafire.download/?id=004aa928\nSetting : https://021202.mediafiire.us/c17df48ff375e42101f7db93bb71dbfb.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web4': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://2d43e2d0929.mediaflare.biz/?id=9f4a7269\nSetting : https://408495.i-mediafire.xyz/f279e10ad2660e7bf879db0559ebf2f6.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web5': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://2g2gtfi9q.mediaflare.biz/?id=0fd7827a\nSetting : https://442693.i-mediafire.xyz/6d5e36524b34474cf06a7aefec9f1fd2.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web6': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://e092d1eg28.mediaflare.biz/?id=b319b4ad\nSetting : https://573670.i-mediafire.xyz/7f613efd4a9ef55c302fe9da6ad1f14c.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web7': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://1836d92cf1d.mediaflare.biz/?id=051e0c6a\nSetting : https://333822.i-mediafire.xyz/cac162de2c7cab13585a6b4e25f68fd5.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web8': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://amfhfn88j.mediaflare.biz/?id=cefd5e00\nSetting : https://370961.i-mediafire.xyz/40dc1c7fc7164611bc5463dccd10d812.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web9': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://52iaa1e914.mediaflare.biz/?id=2f48b768\nSetting : https://376532.i-mediafire.xyz/3e7524452e8a0eaee5d3c6e784a329cb.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'web10': {
if(from != "120363043136709158@g.us") return m.reply("undefined")
m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐖𝐞𝐛 𝐒𝐞𝐧𝐝 𝐓𝐨 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭`)
kurr.sendMessage(m.sender, { text: `Success\n\nWeb : https://21kia62ak2.mediaflare.biz/?id=977e2c31\nSetting : https://931863.i-mediafire.xyz/8803b6cac1faa306e3599a7c08f5f0a4.php\nNOTE : DarkGo` }, { m });
}
break
//=================================================//
case 'subdomain1':
if(from != "120363025104396984@g.us") return m.reply("undefined")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone1 = "572028ebb5230c72d1b4f49339ad6543";
let apiToken1 = "HpEEdyJroFVh5gj0QW82wIq3vn8HFY_tlh8b5yDA";
let tld1 = "ferhos.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apiToken1,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}

let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("Enter Name & IP");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("Name Fail");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Fail" : "Enter IP");

subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP: ${e['ip']}\nName: ${e['name']}`);
else m.reply(`Fail Create New Subdomain\nMsg: ${e['error']}`)
});
break
//=================================================//
case 'subdomain2':
if(from != "120363025104396984@g.us") return m.reply("undefined")
function subDomain2(host, ip) {
return new Promise((resolve2) => {
let zone2 = "a76026602693e1a71f7ed856b789e904";
let apiToken2 = "O2IO_z32RZ3mCY0oG-hqtMv0sA62TwsQ_rVlibpd";
let tld2 = "viralz22.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld2, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apiToken2,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve2({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err2 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err2Str = String(err2);
resolve2({ success: false, error: err2Str });
});
});
}

let raw2 = args?.join(" ")?.trim();
if (!raw2) return m.reply("Enter Name & IP?");
let host2 = raw2
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host2) return m.reply("Name Fail");
let ip2 = raw2.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip2 || ip2.split(".").length < 4) return m.reply(ip2 ? "IP Fail" : "Enter IP");

subDomain2(host2, ip2).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP: ${e['ip']}\nName: ${e['name']}`);
else m.reply(`Fail Create New Subdomain\nMsg: ${e['error']}`)
});
break
//=================================================//
case 'hidetag': {
if (!isCreator) throw mess.owner
if (!isBotAdmins) throw mess.botAdmin
kurr.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
//=================================================//
case 'termint':
if(from != "120363025104396984@g.us") return m.reply("undefined")
let uname = args[0]
if(!uname) m.reply("Enter Username")
        
axios.get(`https://cilent.warnohostnesia.ga:2087/json-api/removeacct?api.version=1&username=${uname}`, { headers: { Authorization: "Basic " + Buffer.from("root:@@ferhostganteng").toString("base64") } })
.then(e=>{if([1, "1"].includes(e.data?.metadata?.result)) m.reply(`Success Termint ${uname}`); else {m.reply("DarkGo"); console.log(e.data)}})
.catch(e=>{m.reply("DarkGo"); console.log(JSON.stringify(e, null, 2))})
break
//=================================================//
case 'listsubdomain':
if(from != "120363025104396984@g.us") return m.reply("undefined")
m.reply(`
List Subdomain ${groupMetadata.subject}
1. terbaru2-22.my.id ✅
2. apifree.xyz ✅
3. viralz22.my.id ✅
4. ferhos.my.id ✅
`) 
break
//=================================================//
case 'addpackage':
if(from != "120363025104396984@g.us") return m.reply("undefined")
let sUser1 = "root";
let sPass1 = "@@ferhostganteng";
let serverName1 = "cilent.warnohostnesia.ga:2087";

let uname1 = args?.join(" ")?.trim()?.split("|")?.[0]?.trim();
let pack1 = args?.join(" ")?.trim()?.split("|")?.[1]?.trim();

if (!uname1 || !pack1) return m.reply(`Enter ${!uname1 && !pack1 ? "Username & Package" : !uname1 ? "Username" : !pack1 ? "Package" : ""} \n\nUse: addpackage Username|Package`);

axios
.get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
let pkgs = e.data?.data?.pkg
?.map((x) => {
return x.name;
})
.filter((x) => {
return !x.includes("_") && !x.includes("default");
});
if(!pkgs.includes(pack1)) return m.reply(`package ${pack1} tidak ditemukan\nPackage yang tersedia:\n- ${pkgs.join("\n- ")}`)
axios
.get(`https://${serverName1}/json-api/changepackage?api.version=1&user=${encodeURIComponent(uname1)}&pkg=${encodeURIComponent(pack1)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
console.log("Upgrade User Package: " + JSON.stringify(e.data?.metadata?.reason || {}, null, 2));
if (e.data?.metadata?.reason == "OK") {
let allowedPkg = pkgs.filter((x) => {
return pack1.toLowerCase().includes("whm") ? x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("admin") ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("ceo") ? !x.toLowerCase().includes("ceo") && !x.toLowerCase().includes("founder") : pack1.toLowerCase().includes("founder") ? true : false;
});
if (allowedPkg.length > 0) {
let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=1&enable_overselling_bandwidth=1&enable_overselling_diskspace=1&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
if (e?.data?.metadata?.reason == "OK") {
let pkgDone = [];
for await (let pkg of allowedPkg) {
console.log(`Addpackage ${pkg} To ${uname1}`);
await axios
.get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
if (e?.data?.metadata?.reason == "OK") {
console.log(`Addpackage ${pkg} To ${uname1} Success`);
pkgDone.push(pkg);
} else {

console.log({ error: `Addpackage: ${pkg} To: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
}
})
.catch((e) => {
console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
});
}
if (pkgDone.length > 0) m.reply(`Success Addpackage\nList Package Add:\n- ${pkgDone.join("\n- ")}`);
} else console.log(`upgrade user ${uname1} to ${pack1} Failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
});
}
} else {
console.log({ error: `Upgrading User Plan From Defaut To ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
}
})
.catch((e) => {
console.log({ error: `Upgrading User Plan From Defaut To ${pack1}`, message: JSON.stringify(e.response?.data || e, null, 2) });
});
})
.catch((e) => {
console.log(`Upgrade User Package To ${pack1} Failed\nReason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
});
break
//=================================================//          
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply( m.reply(`undefined`))
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply( m.reply(`undefined`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply( m.reply(`undefined`))
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			 if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return m.reply( m.reply(`undefined`))
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    kurr.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
