import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
    user: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
    // Ensure 'image' field is defined and can hold base64 string
});

export default mongoose.models.Issue || mongoose.model('Issue', IssueSchema);
