import mongoose from 'mongoose';

const MeetupSchema = new mongoose.Schema({
    user: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true }, 
    participantLimit: { type: Number, required: true },
    participants: [{ type: String }], // Array of usernames or user IDs
    date: { type: String, required: true }, // Date in string format
    time: { type: String, required: true },  // Time in string format
    themePic: { type: String }, // Base64 encoded image
});

const Meetup = mongoose.models.Meetup || mongoose.model('Meetup', MeetupSchema);

export default Meetup;