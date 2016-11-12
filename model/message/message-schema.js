const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const messageSchema = new Schema({
  sender_name:   { type: String, required: true },
	email:         { type: String, required: true },
	subject:       { type: String, required: true },
	message_body:  { type: String, required: true },
	fun_fact:      { type: String },
});


module.exports = mongoose.model('Message', messageSchema);
