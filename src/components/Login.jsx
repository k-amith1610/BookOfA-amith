import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        await axios.post("https://book-of-a-amith-backend.vercel.app/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Login successful!!");
                    setTimeout(() => {
                        toast('Great!!', {
                            icon: '👏👏',
                        });
                    }, 1000);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    reset();
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal dark:text-black">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4 space-y-2 flex-col">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-80 p-2 border rounded-md outline-none" {...register("email", { required: true })} />
                            <div>
                                {errors.email && <span className="text-red-600 text-sm font-bold">Email is required*</span>}
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 flex-col">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter your password" className="w-80 p-2 border rounded-md outline-none" {...register("password", { required: true })} />
                            <div>
                                {errors.password && <span className="text-red-600 text-sm font-bold">Password is required*</span>}
                            </div>
                        </div>
                        <div className="flex justify-around mt-4">
                            <button className="bg-gradient-to-r from-red-600 via-slate-600 to-red-500 py-2 px-4 rounded-md hover:bg-gradient-to-r duration-300 hover:rounded-lg hover:via-slate-800 hover:to-pink-500 text-white font-mono hover:font-bold hover:text-[17px] hover:shadow-lg">Login</button>
                            <p className="py-2 px-4">Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default Login;
