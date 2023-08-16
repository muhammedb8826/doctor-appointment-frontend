import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getUsers } from '../redux/users/userSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const handleSignup = async () => {
    dispatch(getUsers(name, username));
    if (!error) {
      setMessage('User created successfully');
    }
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
