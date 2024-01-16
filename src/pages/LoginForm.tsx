import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<string>('');
  const [popupColor, setPopupColor] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(3);

  const navigate = useNavigate();

  const handleLogin = () => {
    const username = (document.getElementById('username') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)?.value;

    if (username === 'test' && password === '123') {
      setLoginMessage('Success! Logged in.');
      setPopupColor('green');
      setShowPopup(true);

      // Wait for 3 seconds and then navigate to /admin
      setTimeout(() => {
        setCountdown(3); // Reset countdown
        setShowPopup(false);
        navigate('/admin');
      }, 3000);
    } else {
      setLoginMessage('Incorrect username or password.');
      setPopupColor('red');
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (loginMessage !== '') {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear the interval after 3 seconds
      setTimeout(() => {
        clearInterval(interval);
        setCountdown(3); // Reset countdown
        setShowPopup(false);
      }, 3000);
    }
  }, [loginMessage]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="w-96 bg-black bg-opacity-40 p-8 rounded shadow-lg absolute right-10 top-1/2 transform -translate-y-1/2">
        <h2 className="text-2xl font-bold mb-4 text-white">Examination Login</h2>
        <div className="mb-4">
          <label className="block text-gray-300">Choose Role</label>
          <select className="w-full border p-2">
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Username "test"</label>
          <input type="text" id="username" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Password "123"</label>
          <input type="password" id="password" className="w-full border p-2" />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>
          Login
        </button>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center" onClick={closePopup}>
          <div
            className={`bg-white p-4 rounded shadow-lg ${popupColor === 'green' ? 'text-green-600' : 'text-red-600'}`}
          >
            <p>{loginMessage}</p>
            {countdown > 0 && <p>Redirecting in {countdown} seconds...</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
