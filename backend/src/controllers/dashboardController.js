const Message = require('../models/message')

async function postMessage (req, res, next) {
  // actDate = new Date();
  today = new Date();
  date = today.toLocaleDateString();
  time = today.toLocaleTimeString("fr-FR");
  dateTime = date+' '+time;
  const message = new Message({
    body: req.body.body.bodyPostMessage,
    username : req.body.body.username,
    date: dateTime,
  });
  message.save()
    .then(() => res.status(201).json({ message: 'Message posted' }))
    .catch(error => res.status(500).json({ error }));
};

async function getMessage (req, res, next) {
    Message.find()
      .then(message => {
        if (!message) {
          return res.status(401).json({ error: 'Aucun message !' });
        }
        res.status(201).json({ message });
      })
      .catch(error => res.status(500).json({ error }));
};

// async function editOneMessage (req, res, next) {
//   Message.updateOne({ _id: req.body.body._id }, { ...req.body.body.bodyEditMessage, _id: req.body.body._id })
//     .then(message => {
//       res.status(201).json("Message modifié");
//     }
// };
async function getLastMessage (req, res, next) {
  Message.find()
    .sort({_id: -1})
    .limit(5)
    .then(message => {
      if (!message) {
        return res.status(401).json({ error: 'Aucun message !' });
      }
      res.status(201).json({ message });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.postMessage = postMessage;
exports.getMessage = getMessage;
// exports.editOneMessage = editOneMessage;
exports.getLastMessage = getLastMessage;
