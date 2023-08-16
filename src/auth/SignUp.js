import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../redux/users/userSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  if (error) {
    setMessage(error);
  }
  if (error === null) {
    navigate('/doctors');
  }

  const handleSignup = async () => {
    dispatch(createUsers({ name, username }));
    localStorage.setItem('user', JSON.stringify(username));
    setName('');
    setUsername('');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSignup} type="button">Signup</button>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
