var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
  manufacturer	: String,
  model			    : String,
  color			    : String
});

mongoose.model('Car', CarSchema);

