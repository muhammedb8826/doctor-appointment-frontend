import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctor } from '../redux/doctors/doctorSlice';

const Delete = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.data.data);

  // useEffect(() => {
  //   dispatch(deleteDoctor(doctorId));
  // }, [dispatch]);

  const handleDeleteDoctor = (doctorId) => {
    dispatch(deleteDoctor(doctorId));
  };

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors?.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name}
            <button onClick={() => handleDeleteDoctor(doctor.id)} type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
