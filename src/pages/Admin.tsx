import React, { useState } from 'react';
import Header from './Header.tsx';
import ReportPopup from './ReportPopup.tsx'; // Create a new component for the pop-up
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const [showReportPopup, setShowReportPopup] = useState(false);

  // Dummy data for demonstration
  const totalStudents = 1200;
  const totalTeachers = 50;
  const totalClassrooms = 30;

  const handleGenerateReport = () => {
    setShowReportPopup(true);
  };

  return (
    <div
      className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("img/admin.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg w-full max-w-xl">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Total Students</p>
              <p className="text-3xl font-bold">{totalStudents.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Total Teachers</p>
              <p className="text-3xl font-bold">{totalTeachers.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Total Classrooms</p>
              <p className="text-3xl font-bold">{totalClassrooms.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-white bg-opacity-80 p-8 rounded shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/student">
              <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none">
                Add Student
              </button>
            </Link>
            <Link to="/teacher">
              <button className="w-full bg-green-500 text-white p-4 rounded-lg hover:bg-green-700 transition duration-300 focus:outline-none">
                Add Teacher
              </button>
            </Link>
            <Link to="/classroom">
              <button className="w-full bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none">
                Add Classroom
              </button>
            </Link>
            <Link to="/timetable">
              <button className="w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-700 transition duration-300 focus:outline-none">
                Generate Timetable
              </button>
            </Link>
            <Link to="/attendence">
              <button className="w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none">
                Attendence
              </button>
            </Link>
            <button
              onClick={handleGenerateReport}
              className="w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none"
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Display the pop-up if showReportPopup is true */}
      {showReportPopup && <ReportPopup onClose={() => setShowReportPopup(false)} />}
    </div>
  );
};

export default Admin;
