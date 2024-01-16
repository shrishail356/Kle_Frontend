// src/App.tsx

import React, { useState, ChangeEvent } from 'react';
import Header from './Header.tsx';

interface Subject {
  id: number;
  name: string;
  semester: string;
  timings: string;
}

const Timetable: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [currentSubject, setCurrentSubject] = useState<Subject>({
    id: 0,
    name: '',
    semester: '',
    timings: '',
  });

  const handleSubmit = () => {
    // Handle form submission logic here

    // Add the currentSubject to the subjects array
    setSubjects((prevSubjects) => [...prevSubjects, { ...currentSubject, id: subjects.length + 1 }]);

    // Clear the currentSubject for the next entry
    setCurrentSubject({
      id: 0,
      name: '',
      semester: '',
      timings: '',
    });

    // After successful submission, show the success popup
    setShowSuccessPopup(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentSubject((prevSubject) => ({ ...prevSubject, [name]: value }));
  };

  return (
    <div
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("img/classroom.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Timetable Generator</h2>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Building Name</label>
              <input
                type="text"
                id="buildingName"
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter building name"
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Room Number</label>
              <input
                type="text"
                id="roomNumber"
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter room number"
              />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Date</label>
              <input
                type="date"
                id="date"
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="name"
                value={currentSubject.name}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter subject"
              />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Semester</label>
              <input
                type="text"
                id="semester"
                name="semester"
                value={currentSubject.semester}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter semester"
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Timings</label>
              <input
                type="text"
                id="timings"
                name="timings"
                value={currentSubject.timings}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter timings"
              />
            </div>
          </div>

          <div className="mb-4">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none"
            >
              Add Subject
            </button>
          </div>

          <div className="mb-4">
            <table className="w-full border-collapse border border-white">
              <thead>
                <tr>
                  <th className="border border-white p-2">Subject</th>
                  <th className="border border-white p-2">Semester</th>
                  <th className="border border-white p-2">Timings</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id}>
                    <td className="border border-white p-2">{subject.name}</td>
                    <td className="border border-white p-2">{subject.semester}</td>
                    <td className="border border-white p-2">{subject.timings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showSuccessPopup && (
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md" onClick={() => setShowSuccessPopup(false)}>
              <p className="text-lg font-semibold">Timetable data added successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
