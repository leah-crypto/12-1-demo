const bcrypt = require('bcryptjs')
const chats = []

module.exports = {
    createMessage: (req, res) => {
      console.log(req.body)
        const { pin, message } = req.body
        for (let i = 0; i < chats.length; i++) {
          const existing = bcrypt.compareSync(pin, chats[i].pinHash)
          if (existing) {
            chats[i].messages.push(message)
            let messagesToReturn = {...chats[i]}
            delete messagesToReturn.pinHash
            res.status(200).send(messagesToReturn)
            return
          }
        }

        const salt = bcrypt.genSaltSync(5)
        const pinHash = bcrypt.hashSync(pin, salt)

        let msgObj = {
          pinHash,
          messages: [message]
        }
        chats.push(msgObj)
        let messagesToReturn = {...msgObj}
        delete messagesToReturn.pinHash
        res.status(200).send(messagesToReturn)
    }
}
// const bcrypt = require('bcryptjs');
// const chats = [
//   // {
//   //   pinHash:'igydthghkjjiugu',
//   //   chats: {'hakuna matata', 'new message'}
//   // }
// ];

module.exports ={
  createMessage:(req,res) =>{
    console.log(req.body);
    const{pin, message} = req.body
    for(let i=0; i< chats.length; i++){
      const existing = bcrypt.compareSync(pin, chats[i].pinHash);
      if(existing){
        chats[i].messages.push(message);
        let messagesToReturn = {...chats[i]}
        delete messagesT.pinHash;
        console.log(chats[i].messages)
        return res.status(200).send(messagesToReturn);
      }

      const salt = bcrypt.genSaltSync(5)
      const pinHash = bcrypt.hashSync(pin, salt)

      console.log(pinHash);

      let msgObj = {
        pinHash,
        message:[message]
      }
      chats.push(msgObj)
      let messagesToReturn = {...msgObj}
      delete messagesT.pinHash;
      res.stat(200).send(messagesToReturn)
      
    }
  },
};