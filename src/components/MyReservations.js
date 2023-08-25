import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, getReservations } from '../redux/reservations/reservationSlice';
import '../styles/reservationList.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');

  useEffect(() => {
    dispatch(getReservations({ username }));
  }, [dispatch, username]);
  const reservationsData = useSelector((state) => state.reservation.data);

  const handleDeleteReservation = async (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };
  return (
    <div className="reservation-list-container">
      <h2>Reservation List</h2>
      <ul className="reservation-list">
        {reservationsData.map((reservation) => (
          <li key={reservation.id} className="reservation-item">
            <span className="doctor-name">{reservation.doctor.name}</span>
            <span className="reservation-date">
              {reservation.start_date}
              {' '}
              to
              {' '}
              {reservation.end_date}
            </span>
            <span className="location">
              Location:
              {' '}
              {reservation.city}
            </span>
            <button onClick={() => handleDeleteReservation(reservation.id)} className="delete-button" type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
