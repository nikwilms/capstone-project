export async function getBookingInformation() {
  await client.connect();

  const db = client.db('desk-booking');
  const collection = db.collection('bookableObject');
  const data = await collection.aggregate([
    {
      $lookup: {
        from: 'student',
        localField: '_id',
        foreignField: 'bookableObject_id',
        as: 'hasBookings',
      },
    },
  ]);

  //lookup

  return data;
}
