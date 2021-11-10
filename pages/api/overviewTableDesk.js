//import { ObjectId } from 'mongodb';
import client from '../../utils/database';

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db('desk-booking');
    const collection = db.collection('bookableObject');

    switch (request.method) {
      case 'GET':
        const overview = await collection.find().toArray();
        response.status(200).json(overview);
        break;

      //   default:
      //     response.status(405).json({ error: 'Method not allowed' });
      //     break;
    }
  } catch (error) {
    response.status(500).json({ error: 'Something went wrong!' });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
