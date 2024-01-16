import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import Student from './pages/Student.tsx';
import Teacher from './pages/Teacher.tsx';
import Classroom from './pages/Classroom.tsx';
import Attendence from './pages/Attendence.tsx';
import Timetable from './pages/Timetable.tsx';
import Admin from './pages/Admin.tsx';
const App = () => {
  return (
    <Router>
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
