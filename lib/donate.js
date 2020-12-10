exports.donate = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${BotMeki}*
╠════════════════════
║├≽️⚜ *OVO*: _comingsoon_
║├≽️⚜ *PULSA*: _085591654034_
║├≽️⚜ *GOPAY*: _085591654034_
╠════════════════════
║  *${BotMeki}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY AdiGanz*
╚════════════════════`
}

