import React, { useState } from 'react';
import './index.css';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import Islider from './components/Islider';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <div id='plan'>
        <Plan onOpenBooking={() => setBookingOpen(true)} />
      </div>
      <div id='habitaciones'>
        <Rooms onOpenBooking={() => setBookingOpen(true)} />
      </div>
      <div id='galeria'>
        <Islider />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

export default App;
