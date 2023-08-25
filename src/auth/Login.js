import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers, setUser } from '../redux/users/userSlice';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { data: user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) return;
    if (user) {
      localStorage.setItem('user', user.username);
      localStorage.setItem('id', user.id);
      dispatch(setUser(user.username));
      navigate('/doctors');
    }
  }, [dispatch, isLoading, navigate, user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(getUsers({ username }));
    setUsername('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
      <p className="error">{error}</p>
      <p>don&apos;t have an account?</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
