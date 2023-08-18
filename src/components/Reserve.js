import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservations } from '../redux/reservations/reservationSlice';
import { getDoctors } from '../redux/doctors/doctorSlice';
import '../styles/reservations.css';

const Reserve = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [cost, setCost] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const doctors = useSelector((state) => state.doctor.data.data);

  const handleAddReservation = async () => {
    const status = 'Pending';

    const id = localStorage.getItem('id');
    const username = localStorage.getItem('username');

    if (startDate && endDate && city && cost && selectedDoctorId) {
      dispatch(addReservations({
        startDate, endDate, city, cost, status, selectedDoctorId, id, username,
      }));
    }
  };
  return (
    <div className="reservation-container">
      <h2>Make Reservation</h2>
      <form className="reservation-form">
        <div className="select-option-container">
          <select value={selectedDoctorId} onChange={(e) => setSelectedDoctorId(e.target.value)} className="select-option">
            <option value="" className="option">Select a Doctor</option>
            {Array.isArray(doctors) && doctors?.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div className="input-field-container">
          <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="number" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} />
          <button onClick={handleAddReservation} type="submit">Make Reservation</button>
        </div>
      </form>
    </div>
  );
};
export default Reserve;
