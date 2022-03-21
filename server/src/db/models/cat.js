import mongoose from 'mongoose';

const { Schema } = mongoose;

const catSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

export default mongoose.model('Cat', catSchema);
