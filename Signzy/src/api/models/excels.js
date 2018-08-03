// grab the things we need
import mongoose from '../../services/mongoose'
var Schema = mongoose.Schema;

// create a schema
var excelsSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  data: Schema.Types.Mixed
});

// the schema is useless so far
// we need to create a model using it
var excels = mongoose.model('excels', excelsSchema);

// make this available to our excelss in our Node applications
module.exports = excels;