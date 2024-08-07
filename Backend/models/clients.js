const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const clientSchema = new Schema({
  name: {type:String},
  title: {type:String},
  department: {type:String},
  area: {type:String},
  suburb: {type:String},
  phone: {type:String},
  mobile: {type:String},
  email: {type:String},
  item_id:{type:String}
});

const clientModel = model('Clients', clientSchema);

module.exports = clientModel;