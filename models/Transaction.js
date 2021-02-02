const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a postivie or negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

transactionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
