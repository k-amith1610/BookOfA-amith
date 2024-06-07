import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = ({ fullname }) => {

  const [authUser, setAuthUser] = useAuth();
  const displayFullname = fullname.length > 8 ? fullname.slice(0, 7) + '..' : fullname;
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null
      })
      localStorage.removeItem("Users");
      toast.success("Logout successfull!!")
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center space-x-5">
      <span className="bg-gradient-to-r from-red-500 via-slate-700 to-red-500 text-transparent bg-clip-text font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-xs text-sm md:text-xl">
        {displayFullname}
      </span>
      <a onClick={handleLogout}
        className="bg-slate-800 font-bold text-white p-2 rounded-md hover:bg-white hover:text-black hover:border border-red-700 hover:border-y-8 border-x-8 duration-300 cursor-pointer"
      >
        Logout
      </a>
    </div>
  );
}

export default Logout;
