import React from 'react';
import Navbar from './Navbar';
import UserForm from './UserForm';

function App() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '2rem' }}>
                <h1>Fill in the form:</h1>
                <UserForm />
            </div>
        </div>
    );
}

export default App;
