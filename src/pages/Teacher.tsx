// src/App.tsx

import React, { useState } from 'react';
import Header from './Header.tsx';

const Teacher: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here

    // After successful submission, show the success popup
    setShowSuccessPopup(true);

    // You can reset the form fields here if needed
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/teacher.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">TEACHER FORM</h2>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Name</label>
              <input type="text" id="name" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">DOB</label>
              <input type="text" id="dob" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Gender</label>
              <select className="w-full border p-2">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Age</label>
              <input type="text" id="age" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Qualification</label>
              <input type="text" id="qualification" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Phone No</label>
              <input type="text" id="phoneNo" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Teaching Subjects</label>
            <input type="text" id="teachingSubjects" className="w-full border p-2" />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Teacher data added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
