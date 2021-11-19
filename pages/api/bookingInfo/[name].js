import client from '../../../utils/database';

export default async function handler(request, response) {
  try {
    await client.connect();

    const db = client.db('desk-booking');
    const collection = db.collection('bookableObject');

    if (request.method === 'GET') {
      //find property
      const overviewBookingTime = await collection
        .find({ booking: { $exists: true }, name: request.query.name })
        .toArray();
      response.status(200).json(overviewBookingTime);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: 'Something went wrong!' });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
