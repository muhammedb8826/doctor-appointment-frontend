import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../redux/users/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers({ username }));
  }, [dispatch, username]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user?.message === 'Login successful') {
      localStorage.setItem('user', username);
      navigate('/doctors');
    } else {
      setError('Username does not exist');
    }

    setUsername('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
      <p>{error}</p>
      <p>don&apos;t have an account?</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
