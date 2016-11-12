const Controller = require('../../lib/controller');
const messageFacade  = require('./message-facade');

class MessageController extends Controller {}

module.exports = new MessageController(messageFacade);
