

// User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    dob:{type:Date,required:true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    coverPic: { type: String },
    profilePic: { type: String },
    bio:{type:String}
    
});

export default mongoose.models.User || mongoose.model('User', userSchema);