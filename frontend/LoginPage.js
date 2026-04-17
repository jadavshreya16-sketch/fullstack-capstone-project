import React from 'react';

function LoginPage() {

  const loginUser = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sampletoken123'
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
      <h2>Login</h2>
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default LoginPage;
