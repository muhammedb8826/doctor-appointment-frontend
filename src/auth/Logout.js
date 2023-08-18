import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/users/userSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    navigate('/login');
  };
  return (
    <button onClick={handleLogout} type="button" className="logout-button"> Logout </button>
  );
};
export default Logout;
