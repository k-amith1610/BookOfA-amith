import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';
import AboutPage from './AboutPage/AboutPage';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleNavigateToHome = () => {
    if (!authUser) {
      toast.error('Please log in to access the course.', {
        position: 'top-center',
        duration: 5000 
      });
      return <Navigate to="/" />;
    }
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={handleNavigateToHome()} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
