import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../redux/doctors/doctorSlice';
import '../styles/add-doctor.css';

const AddDoctors = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cost, setCost] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    if (name && description && specialization && imageUrl && cost) {
      dispatch(addDoctor({
        name, description, specialization, imageUrl, cost,
      }));
    }
    setName('');
    setDescription('');
    setSpecialization('');
    setImageUrl('');
    setCost('');
    setMessage('Doctor added successfully');
  };
  return (
    <div className="add-doctors-container">
      <h2>Add Doctor</h2>
      <form onSubmit={handleAddDoctor}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
        <input type="text" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <input type="number" placeholder="Cost per session" value={cost} onChange={(e) => setCost(e.target.value)} required />
        <button onClick={handleAddDoctor} type="submit">Add Doctor</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddDoctors;
