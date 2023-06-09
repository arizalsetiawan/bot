exports.run = {
   usage: ['checkapi'],
   hidden: ['api', 'check'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      try {
         let json = await Api.check()
         await client.reply(m.chat, Func.jsonFormat(json), m)
      } catch (e) {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   owner: true,
   location: __filename
}
