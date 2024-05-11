// components/BookingPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingPage() {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleDateChange = (date) => {
        setDate(date);
        setShowForm(true); // Show the form when a date is clicked
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, date: date.toLocaleDateString() }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
      };

    return (
        <div style={{ display: 'flex' }}>
            <Calendar onChange={handleDateChange} value={date} />
            {showForm && (
                <div style={{ marginLeft: '20px', border: '1px solid black', padding: '10px' }}>
                    <h2>Request a Booking</h2>
                    <p>Selected Date: {date.toLocaleDateString()}</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}
        </div>
    );   
}

export default BookingPage;