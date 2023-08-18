import { useDispatch, useSelector } from 'react-redux';
import { LuPlay } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoctors } from '../redux/doctors/doctorSlice';

const Doctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctor.data);

  return (
    <section className="container">
      <button type="button" className="next-button">
        <LuPlay className="play-icon" />
      </button>

      <button type="button" className="back-button">
        <LuPlay className="play-icon" />
      </button>
      <div className="meet-our-doctor">
        <h2>Our Doctors</h2>
        <p>Meet Our Doctors</p>
      </div>
      <ul className="doctors">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="doctor">
            <NavLink to={`/doctors/${doctor.id}`}>
              <img src={`${doctor.image_url}`} alt={`${doctor.name}`} />
              <h4>{doctor.name}</h4>
              <p>{doctor.specialization}</p>
              <p>
                $
                {doctor.cost_per_session}
                {' '}
                /
                Session
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Doctors;
