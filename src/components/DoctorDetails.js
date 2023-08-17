import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoctor } from '../redux/doctors/doctorSlice';
import '../styles/doctor-details.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(id));
  }, [dispatch, id]);

  const doctor = useSelector((state) => state.doctor.data.data);

  return (
    <div className="doctor-details">
      <div className="doctor-image">
        <img src={`${doctor.image_url}`} alt={`${doctor.name}`} />
      </div>
      <div className="doctor-info">
        <h1>
          Doctor Details -
          {' '}
          {doctor.name}
        </h1>
        <p>{doctor.id}</p>
        <p>
          {doctor.specialization}
        </p>
        <p>
          {doctor.description}
        </p>
        <p>
          {doctor.cost_per_session}
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
