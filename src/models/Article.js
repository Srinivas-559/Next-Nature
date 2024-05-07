import mongoose from "mongoose"

const ArticlesSchema = await mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    articleImage: { type: String, required: true },
    
})

export default mongoose.models.Article || mongoose.model('Article', ArticlesSchema)