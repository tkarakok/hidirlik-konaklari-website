import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const form = document.getElementById('reservationForm') as HTMLFormElement;
const checkinInput = document.getElementById('checkin') as HTMLInputElement;
const checkoutInput = document.getElementById('checkout') as HTMLInputElement;
const adultsInput = document.getElementById('adults') as HTMLInputElement;
const childrenInput = document.getElementById('children') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;

const Reservation : React.FC= () => {
    
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Rezervasyon Yap</h2>
      <form onSubmit={handleSubmit}>
        <label>Check-in Tarihi:</label>
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />
        <br />

        <label>Check-out Tarihi:</label>
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />
        <br />

        <label>Yetişkin Sayısı:</label>
        <input
          type="number"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
        />
        <br />

        <label>Çocuk Sayısı:</label>
        <input
          type="number"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
        />
        <br />

        <label>Telefon Numarası:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />

        <button type="submit">Rezervasyon Yap</button>
      </form>
    </div>
  );
};

export default Reservation;

