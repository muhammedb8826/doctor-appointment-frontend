import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoctor } from '../redux/doctors/doctorSlice';
import '../styles/doctor-details.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDoctor(id));
  }, [dispatch, id]);

  const doctor = useSelector((state) => state.doctor.data.data);
  const handeleReserve = () => {
    navigate('/reserve');
  };
  console.log(doctor);
  return (
    <div className="doctor-details-container">
      <div className="doctor-image-container">
        <img className="doctor-image" src={`${doctor.image_url}`} alt={`${doctor.name}`} />
      </div>
      <div className="doctor-info-container">
        <h1 className="doctor-name">
          {doctor.name}
        </h1>
        <div className="doctor-details">
          <p className="doctor-specialization">
            Specialization:
            {doctor.specialization}
          </p>
          <p className="doctor-description">
            Description:
            {doctor.description}
          </p>
          <p className="doctor-cost">
            Cost per Session:
            {doctor.cost_per_session}
          </p>
          <button className="reserve-btn" type="button" onClick={handeleReserve}>Make Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
