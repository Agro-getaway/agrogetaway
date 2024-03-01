// Logout.js
import React, { useEffect } from 'react';

function LogOut() {
  useEffect(() => {
    // Perform the logout actions here, such as clearing user session or token.
    // For example, you can use localStorage or a state management library like Redux.

    // Clear the user's session or token (example using localStorage)
    localStorage.removeItem('userToken');

    // Redirect to the login page or any other desired page after logout
    setTimeout(() => {
      window.location.href = '/'; // Use window.location.href to change the URL
    }, 2000); // Redirect after a delay (e.g., 2 seconds)
  }, []);

  return (
    <div>
      Logging out...
      {/* You can add a loading spinner or other feedback here */}
    </div>
  );
}

export default LogOut;
