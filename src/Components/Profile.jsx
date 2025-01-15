import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../Pages/Contexts/AuthContext";
import { UserCircle } from "lucide-react";

const Profile = () => {
  const { logout, isAuthenticated } = useAuth();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmail = async () => {
      const token = localStorage.getItem("token");
      if (!isAuthenticated || !token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("https://dvote-server.onrender.com/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.error || "Failed to fetch email.");
          return;
        }

        const data = await response.json();
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching email:", error);
        toast.error("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmail();
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 h-screen p-4">
        <div className="bg-white w-full max-w-md flex flex-col items-center p-6 rounded-lg shadow-lg space-y-4">
          <div className="relative w-24 h-24 mb-4">
            <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
          </div>

          <div className="space-y-2 w-full">
            <div className="text-center space-y-2">
              <div className="w-16 h-4 mx-auto bg-gray-300 animate-pulse rounded" />
              <div className="w-48 h-6 mx-auto bg-gray-300 animate-pulse rounded" />
            </div>

            <div className="pt-4 w-full">
              <div className="w-full h-10 bg-gray-300 animate-pulse rounded-md" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="text-lg text-white">No profile found.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-r from-blue-800 to-blue-600 h-auto p-4 w-full">
      <div className="bg-white w-full max-w-md flex flex-col items-center p-6 rounded-lg shadow-lg space-y-4">
        <div className="relative w-20 h-20 mb-4">
          <UserCircle className="w-full h-full text-gray-400" />
        </div>

        <div className="space-y-1 w-full">

          <div className="pt-2 w-full">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition-all duration-200"
            >
              <CiLogout className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full px-2 text-center">
        <div className="text-xs text-white">
          Logged in as
          <span className="ml-1 font-medium text-gray-200">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;