import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteDoctor, getDoctors } from '../redux/doctors/doctorSlice';
import '../styles/delete-doctor.css';

const Delete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctor.data.data);
  const handleDeleteDoctor = (id) => {
    dispatch(deleteDoctor(id));
    navigate('/doctors');
  };

  return (
    <div className="delete-doctor">
      <h2>Doctor List</h2>
      <ul>
        { Array.isArray(doctors) && doctors?.map((doctor) => (
          <li key={doctor.id}>
            <p>{doctor.name}</p>
            <button type="button" onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
