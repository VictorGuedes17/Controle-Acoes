import mongoose from '../index'

const ControlSchema = new mongoose.Schema({
  papper : {
    type: String,
    required: true,
    lowercase: true
  },
  amount : {
    type: Number,
    required: true,
  },
  inputDate : {
    type: Number,
    required: true,
  },
  inputPrice : {
    type: Number,
    required: true,
  },
  saleDate : {
    type: Number,
  },
  saleAmout : {
    type: Number,
  },
  salePrice : {
    type: Number,
  },
  result: {
    type: Number
  },
  userUid: {
    type: String,
    required: true
  }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

 const Control = mongoose.model('Control', ControlSchema);

 export default Control;