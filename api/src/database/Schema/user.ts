import mongoose from '../index'

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  email : {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password : {
    type: String,
    required: true,
    select: true
  }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

 const User = mongoose.model('User', UserSchema);

 export default User;