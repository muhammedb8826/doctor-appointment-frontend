import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>
        Doctor Details -
        {' '}
        {id}
      </h1>
    </div>
  );
};

export default DoctorDetails;
