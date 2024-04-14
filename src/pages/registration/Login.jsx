import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Footer from "../../component/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        toast.success("Login Successful");
        navigation("/home");
        setEmail("");
        setPassword("");
      } catch (error) {
        toast.error("Invalid email or password");
        console.error("Login failed:", error.message);
      }
    }
  };

  const resetHandler = () => {
    navigation("/forgotpassword");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    handleLogin(); // Call handleLogin when form is submitted
  };

  return (
    <div>
      <div className="dark:bg-gray-900 min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
          <div className="text-lg text-gray-500 mb-4 -mt-6 hover:text-gray-300 cursor-pointer select-none">
            Welcome to BudgetGadget
          </div>

          <div className="w-full rounded-lg shadow dborder sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 mb-14">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="md:text-center font-bold text-2xl text-white">
                User Login
              </h1>
              <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="showpassword"
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                      />
                    </div>
                    <div className="ml-2 mb-1  text-base cursor-pointer">
                      <label
                        htmlFor="showpassword"
                        className="text-blue-500 font-medium cursor-pointer"
                      >
                        Show password
                      </label>
                    </div>
                  </div>
                  <div
                    className="text-base font-medium text-blue-600 hover:underline ml-[3.5rem] lg:ml-[3.1rem] xl:ml-[3.1rem] text-center cursor-pointer pb-1"
                    onClick={resetHandler}
                  >
                    Forgot password
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-1"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="md:-mt-20 -mt-[20rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
