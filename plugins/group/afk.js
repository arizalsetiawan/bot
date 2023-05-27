exports.run = {
   usage: ['afk'],
   use: 'reason (optional)',
   category: 'group',
   async: async (m, {
      client,
      text
   }) => {
      try {
         let user = global.db.users.find(v => v.jid == m.sender)
         user.afk = +new Date
         user.afkReason = text
         let tag = m.sender.split`@` [0]
         return client.reply(m.chat, Func.texted('bold', `🚩 @${tag} Sedang AFK! Jangan diganggu, Tunggu sampai online kembali`), m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   group: true,
   owner: true
}
