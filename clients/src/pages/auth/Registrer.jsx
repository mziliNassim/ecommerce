import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import authregister from "../../img/auth/authlogin.svg";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";

const Register = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hidPassword, setHidPassword] = useState(true);
  const [hidConfirmPassword, setHidConfirmPassword] = useState(true);
  const [alert, setAlert] = useState({ message: "", state: "" });
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "nassim",
    email: "nassim@gmail.com",
    password: "nassim123",
    confirmPassword: "nassim123",
    terms: false,
  });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    if (type === "checkbox") {
      setRegisterData({ ...registerData, [name]: checked });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const register = async () => {
    await axios
      .post("http://localhost:5000/users/register", registerData)
      .then((res) => {
        dispatch(setUser(res.data.user));
        navigate("/");
      })
      .catch((err) => {
        setAlert({
          message: err.response.data.message,
          state: "danger",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (registerData.terms) register();
    else {
      setAlert({
        message: "Please accept terms and conditions",
        state: "warning",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <section className="overflow-y-hidden bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center w-full max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="grid items-center w-full max-w-6xl gap-16 md:grid-cols-2">
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Top section */}
                <div className="mb-8">
                  <h3 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
                    Sign up
                  </h3>
                </div>

                {alert.message !== "" && (
                  <div
                    id="alert-1"
                    className={`flex items-center justify-between p-4 mb-4  rounded-lg ${
                      alert.state === "success"
                        ? "text-green-800 dark:text-green-400 bg-green-50 "
                        : alert.state === "warning"
                        ? "text-yellow-800 dark:text-yellow-400 bg-yellow-50 "
                        : "text-red-800 dark:text-red-400 bg-red-50 "
                    }  dark:bg-gray-800 `}
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>

                    <span className="sr-only">Info</span>

                    <div className="text-sm font-medium ms-3">
                      {alert.message}
                    </div>

                    <button
                      onClick={() => setAlert({ message: "", state: "" })}
                      type="button"
                      className={`ms-auto transition-all rounded-lg focus:ring-2 dark:bg-gray-800 dark:hover:bg-gray-700  p-1.5 inline-flex items-center justify-center h-8 w-8 ${
                        alert.state === "success"
                          ? "focus:ring-green-400 dark:text-green-400 bg-green-100 text-green-500"
                          : alert.state === "warning"
                          ? "focus:ring-yellow-400 dark:text-yellow-400 bg-yellow-100 text-yellow-500"
                          : "focus:ring-red-400 dark:text-red-400 bg-red-100 text-red-500"
                      }  `}
                      data-dismiss-target="#alert-1"
                      aria-label="Close"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                {/* username */}
                <div>
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    User name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      value={registerData.username}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#16bdca]"
                      placeholder="Enter user name"
                    />
                    <i className="absolute text-gray-400 -translate-y-1/2 bi bi-person-add right-5 top-1/2"></i>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      value={registerData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#16bdca]"
                      placeholder="Enter email"
                    />
                    <i className="absolute text-gray-400 -translate-y-1/2 bi bi-envelope right-5 top-1/2"></i>
                  </div>
                </div>

                {/* password */}
                <div>
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={hidPassword ? "password" : "text"}
                      value={registerData.password}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#16bdca]"
                      placeholder="Enter password"
                    />
                    <div
                      onClick={() => setHidPassword(!hidPassword)}
                      className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
                    >
                      {hidPassword ? (
                        <i className="text-gray-400 bi bi-eye"></i>
                      ) : (
                        <i className="text-gray-400 bi bi-eye-slash"></i>
                      )}
                    </div>
                  </div>
                </div>

                {/* confirm password */}
                <div>
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="confirmPassword"
                      type={hidConfirmPassword ? "password" : "text"}
                      value={registerData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#16bdca]"
                      placeholder="Confirm your password"
                    />
                    <div
                      onClick={() => setHidConfirmPassword(!hidConfirmPassword)}
                      className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
                    >
                      {hidConfirmPassword ? (
                        <i className="text-gray-400 bi bi-eye"></i>
                      ) : (
                        <i className="text-gray-400 bi bi-eye-slash"></i>
                      )}
                    </div>
                  </div>
                </div>

                {/* terms */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={registerData.terms}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                    />

                    <label
                      htmlFor="terms"
                      className="block ml-3 space-x-1 text-sm text-gray-800 cursor-pointer dark:text-gray-200"
                    >
                      Accept Terms and Conditions
                    </label>
                  </div>
                </div>

                {/* submit */}
                <div className="!my-5">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#16bdca] opacity-90 hover:opacity-100 font-semibold hover:[#16bdca] focus:outline-none"
                  >
                    {loading ? (
                      <div>
                        <svg
                          aria-hidden="true"
                          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>

                <hr className="" />

                {/* redirict login */}
                <p className="text-sm !mt-8 text-center text-gray-800 dark:text-gray-200">
                  Allredy have account{" "}
                  <Link
                    to="/auth/login"
                    className="ml-1 font-semibold text-blue-600 hover:underline whitespace-nowrap"
                  >
                    login here
                  </Link>
                </p>
              </form>
            </div>
            <div className="">
              <img
                src={authregister}
                className="block object-cover w-full h-full mx-auto max-md:w-4/5"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
