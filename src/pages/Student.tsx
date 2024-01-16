// src/App.tsx

import React, { useState } from 'react';
import Header from './Header.tsx';

const Student: React.FC = () => {
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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/student_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">STUDENT FORM</h2>

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
              <label className="block text-gray-300">Class</label>
              <input type="text" id="class" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Division</label>
              <input type="text" id="division" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">USN</label>
              <input type="text" id="usn" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Roll No</label>
              <input type="text" id="rollNo" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Semester</label>
              <input type="text" id="semester" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Course Taken</label>
              <div>
                <input type="radio" id="cse" name="course" value="CSE" />
                <label htmlFor="cse" className="ml-2 text-gray-300">
                  CSE
                </label>
              </div>
              <div>
                <input type="radio" id="cseAi" name="course" value="CSE-Ai" />
                <label htmlFor="cseAi" className="ml-2 text-gray-300">
                  CSE-Ai
                </label>
              </div>
              <div>
                <input type="radio" id="ece" name="course" value="ECE" />
                <label htmlFor="ece" className="ml-2 text-gray-300">
                  ECE
                </label>
              </div>
              <div>
                <input type="radio" id="eee" name="course" value="EEE" />
                <label htmlFor="eee" className="ml-2 text-gray-300">
                  EEE
                </label>
              </div>
              <div>
                <input type="radio" id="mech" name="course" value="MECH" />
                <label htmlFor="mech" className="ml-2 text-gray-300">
                  MECH
                </label>
              </div>
            </div>
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
            <p className="text-lg font-semibold">Student data added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
