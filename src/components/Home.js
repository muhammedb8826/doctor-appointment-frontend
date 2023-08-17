import { useDispatch, useSelector } from 'react-redux';
import { LuPlay } from 'react-icons/lu';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Logout from '../auth/Logout';
import { getDoctors } from '../redux/doctors/doctorSlice';

const Doctors = () => {
  const navigat = useNavigate();
  const localStorageToken = localStorage.getItem('user');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctor.data.data);

  const login = () => {
    if (localStorageToken) {
      return true;
    }
    navigat('/login');
    return false;
  };

  return (
    login() && (
    <section className="container">
      <button type="button" className="next-button">
        <LuPlay className="play-icon" />
      </button>

      <button type="button" className="back-button">
        <LuPlay className="play-icon" />
      </button>
      <Logout />
      <div className="meet-our-doctor">
        <h2>Our Doctors</h2>
        <p>Meet Our Doctors</p>
      </div>
      <ul className="doctors">
        {Array.isArray(doctors) && doctors?.map((doctor) => (
          <li key={doctor.id} className="doctor">
            <NavLink to={`/doctors/${doctor.id}`}>
              <img src={`${doctor.image_url}`} alt={`${doctor.name}`} />
              <h4>{doctor.name}</h4>
              <p>{doctor.specialization}</p>
              <p>{doctor.description}</p>
              <p>{doctor.cost_per_session}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
    )
  );
};

export default Doctors;
