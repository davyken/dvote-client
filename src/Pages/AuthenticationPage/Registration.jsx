import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import API_URL from "../Constants/Constants";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);

      const responseText = await response.text();
      console.log("Response Text:", responseText);

      if (response.ok) {
        const responseData = JSON.parse(responseText);
        toast.success(
          "Registration successful! Please check your email for verification instructions."
        );
        navigate("/verify-email");
      } else {
        let errorData = {};
        try {
          errorData = JSON.parse(responseText);
        } catch (error) {
          errorData = { message: "Unknown error occurred" };
        }
        console.log("Error Data:", errorData);
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        "An error occurred during registration. Please try again later."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-blue-800 min-h-screen flex items-center justify-center">
        <div className="bg-blue-700 rounded-lg shadow-md p-6 sm:p-8 max-w-md w-full space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Create your account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white mb-2"
              >
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <FaUser className="text-white mx-2" />
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  type="text"
                  className="bg-white w-full p-2.5 rounded-lg focus:outline-none"
                  placeholder="Username"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Your email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <FaEnvelope className="text-white mx-2" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^[^@]+@[^@]+\.[^@]+$/,
                  })}
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Password
                </label>
              </div>
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
                className="w-full bg-blue-600 text-white p-2.5 rounded-lg text-lg"
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign up"}
              </button>
            </div>

            <p className="text-sm text-center mt-4 text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-300">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;