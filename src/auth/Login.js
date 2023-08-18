import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../redux/users/userSlice';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({ username }));
  }, [dispatch, username]);

  const user = useSelector((state) => state.user.data);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user?.message === 'Login successful') {
      const { id } = user.data;
      localStorage.setItem('user', username);
      localStorage.setItem('id', id);
      navigate('/doctors');
      window.location.reload();
    } else {
      setError(user);
    }

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
