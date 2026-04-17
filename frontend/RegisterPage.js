import React from 'react';

function RegisterPage() {

  const registerUser = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'testuser',
        password: 'test123'
      })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Register</h2>
      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default RegisterPage;
