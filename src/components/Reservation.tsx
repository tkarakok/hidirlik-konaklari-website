import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const form = document.getElementById('reservationForm') as HTMLFormElement;
const checkinInput = document.getElementById('checkin') as HTMLInputElement;
const checkoutInput = document.getElementById('checkout') as HTMLInputElement;
const adultsInput = document.getElementById('adults') as HTMLInputElement;
const childrenInput = document.getElementById('children') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;

const Reservation : React.FC = () => {
form?.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Formdan veri çekme
  const checkinDate = checkinInput.value;
  const checkoutDate = checkoutInput.value;
  const adultsCount = parseInt(adultsInput.value);
  const childrenCount = parseInt(childrenInput.value);
  const phoneNumber = phoneInput.value;

  // Basit doğrulamalar (örnek)
  if (!checkinDate || !checkoutDate || !adultsCount || !childrenCount || !phoneNumber) {
    alert('Lütfen tüm alanları doldurduğunuzdan emin olun.');
    return;
  }

  // Rezervasyonu göster
  alert(`
    Rezervasyon Başarıyla Alındı!
    - Check-in: ${checkinDate}
    - Check-out: ${checkoutDate}
    - Yetişkin Sayısı: ${adultsCount}
    - Çocuk Sayısı: ${childrenCount}
    - Telefon Numarası: ${phoneNumber}
  `);

  // Formu sıfırlama (isteğe bağlı)
  form.reset();
})};
export default Reservation;
