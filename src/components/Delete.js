import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteDoctor, getDoctors } from '../redux/doctors/doctorSlice';
import '../styles/delete-doctor.css';

const Delete = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctor.data.data);
  const handleDeleteDoctor = (id) => {
    dispatch(deleteDoctor(id));
    window.location.reload();
  };

  return (
    <div className="delete-doctor">
      <h2>Doctor List</h2>
      <ul>
        { Array.isArray(doctors) ? doctors?.map((doctor) => (
          <li key={doctor.id}>
            <p>{doctor.name}</p>
            <button type="button" onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
          </li>
        )) : <h3 className="no-doctors">Doctor list is Empty</h3>}
      </ul>
    </div>
  );
};

export default Delete;
