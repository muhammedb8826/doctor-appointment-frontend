import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const users = useSelector((state) => state.user.data);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  if (error) {
    setMessage(error);
  }
  if (error === null) {
    navigate('/doctors');
  }

  const handleLogin = async () => {
    const user = users.find((user) => user.username === username);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setUsername('');
    } else {
      setMessage('Username does not exist');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin} type="button">Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
