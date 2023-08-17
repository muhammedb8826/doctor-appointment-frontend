import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../redux/users/userSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (name && username) {
      dispatch(createUsers({ name, username }));
      navigate('/login');
    } else {
      setMessage('Please fill in all fields');
    }
    setName('');
    setUsername('');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleSignup} type="button">Signup</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default SignUp;
