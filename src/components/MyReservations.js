import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteReservation, getReservations } from '../redux/reservations/reservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getReservations({ username }));
  }, [dispatch]);
  const reservationsData = useSelector((state) => state.reservation.data.data);

  console.log(reservationsData);

  const handleDeleteReservation = async (reservationId) => {
    dispatch(deleteReservation(reservationId));
    navigate('/doctors');
  };
  return (
    <div>
      <h2>Reservation List</h2>
      <ul>
        {Array.isArray(reservationsData) && reservationsData?.map((reservation) => (
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
            location
            {reservation.city}
            <button onClick={() => handleDeleteReservation(reservation.id)} type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
