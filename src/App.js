import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyReservations from './components/MyReservations';
import AddDoctors from './components/AddDoctors';
import Reserve from './components/Reserve';
import Delete from './components/Delete';
import DoctorDetails from './components/DoctorDetails';

function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Home />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/add-doctors" element={<AddDoctors />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
