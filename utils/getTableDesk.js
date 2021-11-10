import client from './database';

//function for dynamic root
export async function getBookableObjects() {
  await client.connect();
  const db = client.db('desk-booking');
  const collection = db.collection('bookableObject');
  const data = await collection.find().sort({ name: 1 }).toArray();
  console.log(data);
  return data;
}

//dynamic root and is shows the name in the header
export async function getBookableObjectByName(name) {
  await client.connect();
  const db = client.db('desk-booking');
  const collection = db.collection('bookableObject');
  const data = await collection.findOne({ name });
  console.log(data);
  return data;
}
