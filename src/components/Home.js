import { useDispatch, useSelector } from 'react-redux';
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
      <div className="meet-our-doctor">
        <h2 className="text-center text-primary">Our Doctors</h2>
        <h5 className="text-center">Meet Our Doctors</h5>
      </div>

      <ul className="doctors">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="doctor">
            <img src="logo.png" alt="" />
            <h4>{doctor.name}</h4>
            <p>+61 452 200 126</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Doctors;
