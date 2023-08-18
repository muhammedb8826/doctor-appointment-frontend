import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, getReservations } from '../redux/reservations/reservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  useEffect(() => {
    dispatch(getReservations({ username }));
  }, [dispatch]);
  const reservationsData = useSelector((state) => state.reservation);

  console.log(reservationsData.data);

  const handleDeleteReservation = async (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };
  return (
    <div>
      <h2>Reservation List</h2>
      <ul>
        {reservationsData?.data.map((reservation) => (
          <li key={reservation.id}>
            {reservation.doctor.name}
            {' '}
            -
            {' '}
            {reservation.start_date}
            {' '}
            to
            {' '}
            {reservation.end_date}
            <button onClick={() => handleDeleteReservation(reservation.id)} type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
