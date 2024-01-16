import React from 'react';

interface ReportPopupProps {
  onClose: () => void;
}

const ReportPopup: React.FC<ReportPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg w-96">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Report Details</h3>

        <div className="mb-4">
          <p className="text-gray-700">Building No:</p>
          <p className="text-gray-700 text-lg font-semibold">1</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">Room No:</p>
          <p className="text-gray-700 text-lg font-semibold">101</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">Allocated Teacher:</p>
          <p className="text-gray-700 text-lg font-semibold">John Doe</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">Students:</p>
          <p className="text-gray-700 text-lg font-semibold">30</p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition duration-300 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReportPopup;
