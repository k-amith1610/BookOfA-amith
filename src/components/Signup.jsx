import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import WebsiteName from './WebsiteName';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios.post("https://book-of-a-amith-backend.vercel.app/user/signup", userInfo)
            .then((res) => {
                // console.log(res.data);
                if (res.data) {
                    navigate(from, { replace: true });
                    toast.success("Signup successful!!");

                    setTimeout(() => {
                        toast('Good Job!!', {
                            icon: '👏',
                        });
                    }, 1000);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                    reset();
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            }).catch((error) => {
                if (error.response) {
                    console.log(error);
                    toast.error(error.response.data.message);
                }
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("https://wallpapers.com/images/featured/red-and-black-eaiivsm48tbupy96.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 bg-white rounded-lg shadow-lg relative dark:text-black mx-4">
                <div className="p-4">
                    <div className="absolute top-4 left-4">
                        <div className="border border-red-500 border-x-4 border-y-4 duration-300 rounded-full">
                            <Link to="/" className="flex items-center">
                                <img className="w-10 h-10 rounded-full" src="/assets/logo.avif" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[-14px]">
                        <WebsiteName />
                    </div>
                </div>
                <h3 className="font-bold text-lg mt-4 text-left">Signup</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded-md outline-none" {...register("fullname", { required: true })} />
                        <div>
                            {errors.fullname && <span className="text-red-600 text-sm font-bold">Name is required*</span>}
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-md outline-none" {...register("email", { required: true })} />
                        <div>
                            {errors.email && <span className="text-red-600 text-sm font-bold">Email is required*</span>}
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <input type="password" placeholder="Enter your password" className="w-full p-2 border rounded-md outline-none" {...register("password", { required: true })} />
                        <div>
                            {errors.password && <span className="text-red-600 text-sm font-bold">Password is required*</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around mt-4 items-center">
                        <button className="bg-gradient-to-r from-red-600 via-slate-600 to-red-500 py-2 px-4 rounded-md hover:bg-gradient-to-r duration-300 hover:rounded-lg hover:via-slate-800 hover:to-pink-500 text-white font-mono hover:font-bold hover:text-[17px] hover:shadow-lg mb-2 md:mb-0">Signup</button>
                        <p className="p-2 text-sm">Already Registered? <Link to="/" className="underline text-blue-500 cursor-pointer">Go to Home</Link></p>
                    </div>
                </form>
                <Login />
            </div>
        </div>
    );
}

export default Signup;
