import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
const form = document.getElementById('reservationForm') as HTMLFormElement;
const checkinInput = document.getElementById('checkin') as HTMLInputElement;
const checkoutInput = document.getElementById('checkout') as HTMLInputElement;
const adultsInput = document.getElementById('adults') as HTMLInputElement;
const childrenInput = document.getElementById('children') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;

const Reservation: React.FC = () => {
    const { t } = useLanguage();
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [phone, setPhone] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Form gönderildiğinde bir süre boyunca mesaj gösterilsin
        setSubmissionMessage('Talebiniz alınmıştır!');

        // İsteğe bağlı: Mesajı 5 saniye sonra kaldırabiliriz
        setTimeout(() => {
            setSubmissionMessage('');
        }, 5000);
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
                    <form
                        onSubmit={handleSubmit}
                        method="POST"
                        action="https://formspree.io/f/xpwqvvrp" // Formspree form ID
                        data-netlify="true"
                    >
                        <label>Check-in Tarihi:</label>
                        <input
                            type="date"
                            name="checkin"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                            required
                        />

                        <label>Check-out Tarihi:</label>
                        <input
                            type="date"
                            name="checkout"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                            required
                        />

                        <label>Yetişkin Sayısı:</label>
                        <input
                            type="number"
                            name="adults"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            min="1"
                            required
                        />

                        <label>Çocuk Sayısı:</label>
                        <input
                            type="number"
                            name="children"
                            value={children}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            min="0"
                            required
                        />

                        <label>Telefon Numarası:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]{10}"
                            required
                        />

                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-4">
                            Rezervasyon Yap
                        </button>
                    </form>

                    {/* Rezervasyon mesajı */}
                    {submissionMessage && (
                        <div className="bg-green-100 text-green-700 p-4 mt-4 rounded w-full text-center">
                            {submissionMessage}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reservation;
