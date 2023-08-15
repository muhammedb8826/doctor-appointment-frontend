import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyReservations from './components/MyReservations';
import AddDoctors from './components/AddDoctors';

function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/add-doctors" element={<AddDoctors />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
