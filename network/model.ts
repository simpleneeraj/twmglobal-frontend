import { model, Schema } from 'mongoose';

const resultsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  marks: {
    type: String,
    required: true,
  },
});

const ResultsModel = model('results', resultsSchema);

export default ResultsModel;
