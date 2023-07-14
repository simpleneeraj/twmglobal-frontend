import { model, Schema } from 'mongoose';

const resultsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
});

const ResultsModel = model('results', resultsSchema);

export default ResultsModel;
