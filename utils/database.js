import { MongoClient } from 'mongodb';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const client = new MongoClient(process.env.MONGODB_URI, options);
export default client;
