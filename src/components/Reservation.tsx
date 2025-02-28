import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
const form = document.getElementById('reservationForm') as HTMLFormElement;
const checkinInput = document.getElementById('checkin') as HTMLInputElement;
const checkoutInput = document.getElementById('checkout') as HTMLInputElement;
const adultsInput = document.getElementById('adults') as HTMLInputElement;
const childrenInput = document.getElementById('children') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;

const Reservation: React.FC = () => {
    const { t, language } = useLanguage();
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
        <section id="reservation" className="py-10 bg-white-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('reservation.title')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('reservation.subtitle')}
                    </p>
                </div>
                <div className="reservation-form-container">

                    <form onSubmit={handleSubmit}>
                        <label>Check-in Tarihi:</label>
                        <input
                            type="date"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                        />

                        <label>Check-out Tarihi:</label>
                        <input
                            type="date"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                        />

                        <label>Yetişkin Sayısı:</label>
                        <input
                            type="number"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            min="1"
                        />

                        <label>Çocuk Sayısı:</label>
                        <input
                            type="number"
                            value={children}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            min="0"
                        />

                        <label>Telefon Numarası:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]{10}"
                        />

                        <button type="submit">Rezervasyon Yap</button>
                    </form>
                </div>
            </div>
        </section>

    );

};

export default Reservation;

