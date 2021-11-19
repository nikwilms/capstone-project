import client from '../../../utils/database';
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  try {
    await client.connect();

    const db = client.db('desk-booking');
    const collection = db.collection('bookableObject');

    if (request.method === 'GET') {
      //find property
      const overviewBookings = await collection
        .find({ booking: { $exists: true } })
        .toArray();
      response.status(200).json(overviewBookings);
    } else if (request.method === 'POST') {
      const booking = request.body;
      const bookableObject = await collection.findOne({
        name: booking.bookableObject,
      });
      // console.log(booking.bookableObject);
      if (!bookableObject) {
        response.status(400).json({ error: 'Object not found' });
        return;
      }

      //create new booking array, if there is no booking
      if (!bookableObject.booking) {
        await collection.updateOne(
          { name: booking.bookableObject },
          { $set: { booking: [] } }
        );
        bookableObject.booking = [];
      }

      //checks if the booking times are overlapping, and returns true or false
      const isIntervalOverlap = bookableObject.booking.some(
        ({ startDate, endDate }) => {
          return areIntervalsOverlapping(
            {
              start: new Date(startDate),
              end: new Date(endDate),
            },
            {
              start: new Date(booking.startDate),
              end: new Date(booking.endDate),
            }
          );
        }
      );

      if (isIntervalOverlap === true) {
        //how to get the status into frontend?
        response.status(400).json({
          error: 'Please choose another date, this date is already booked',
        });
      } else {
        const newBooking = await collection.updateOne(
          {
            name: booking.bookableObject,
          },
          {
            $push: {
              booking: {
                _id: ObjectId(),
                startDate: booking.startDate,
                endDate: booking.endDate,
              },
            },
          }
        );
        response.status(200).json(newBooking);
      }
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: 'Something went wrong!' });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
