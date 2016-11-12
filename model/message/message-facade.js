const Model = require('../../lib/facade');
const messageSchema  = require('./message-schema');

class MessageModel extends Model {}

module.exports = new MessageModel(messageSchema);
