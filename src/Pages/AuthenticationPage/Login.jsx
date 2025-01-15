import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa"; // Import additional icons
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import API_URL from "../Constants/Constants";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setRefetchCurrentUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Submitted data:", data);
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (response.ok) {
        const { accessToken, refreshToken } = await response.json();
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setRefetchCurrentUser((prev) => !prev);
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        toast.error(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-blue-800 min-h-screen flex items-center justify-center">
        <div className="bg-blue-700 rounded-lg shadow-md p-6 sm:p-8 max-w-md w-full space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <FaEnvelope className="text-white mx-2" />
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="bg-white w-full p-2.5 rounded-lg focus:outline-none"
                  placeholder="name@gmail.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-2"
              >
                Password
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <FaLock className="text-white mx-2" />
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={passwordVisible ? "text" : "password"}
                  className="bg-white w-full p-2.5 rounded-lg focus:outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2.5 rounded-lg text-xl"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>

            <p className="text-sm text-center mt-4 text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-300">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </section>
      <div className="bg-white h-3 w-full"></div>
    </>
  );
};

export default Login;