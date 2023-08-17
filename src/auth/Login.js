import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUsers } from '../redux/users/userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const users = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(getUsers({ username }));

    if (users.message === 'Login successful') {
      localStorage.setItem('user', JSON.stringify(username));
      navigate('/doctors');
      setUsername('');
    } else {
      setMessage('Username does not exist');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleLogin} type="button">Login</button>
      </form>
      <p>Don&apos;t have an account?</p>
      <button type="button" onClick={() => navigate('/signup')}>Signup</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
