const mongoose  = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date
});


mongoose.model('blogs',blogSchema);
