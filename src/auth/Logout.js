import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    navigate('/login');
    window.location.reload();
  };
  return (
    <button onClick={handleLogout} type="button" className="logout-button"> Logout </button>
  );
};
export default Logout;
