import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: String,
  description: String,
}, { timestamps: true });

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);