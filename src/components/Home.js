import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { LuPlay } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { getDoctors } from '../redux/doctors/doctorSlice';
import SignUp from '../auth/SignUp';

const Doctors = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctor.data);
  const hasNext = index < doctors.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const isLogedIn = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    }
    return false;
  };

  return (
    isLogedIn() ? (
      <section className="container">
        <button onClick={handleNextClick} type="button" className="next-button">
          <LuPlay className="play-icon" />
        </button>

        <button onClick={handleNextClick} type="button" className="back-button">
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
                <img src="logo.png" alt="" />
                <h4>{doctor.name}</h4>
                <p>+61 452 200 126</p>
                <p>{doctor.email}</p>
                <p>{doctor.speciality}</p>
                <p>{doctor.location}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    ) : (
      <SignUp />
    )
  );
};

export default Doctors;
