async function loginRequest(email, password) {
  try {
    const response = await fetch('http://localhost:3030/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Handle successful login
      console.log('Login successful!');

      //console.log(response);
    } else {
      // Handle login failure
      console.error('Login failed.');
    }
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export default loginRequest;
