import './App.css';
import Instructor from './pages/instructor/instructor';
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from './pages/student/student';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
