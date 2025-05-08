import React, { useEffect, useState } from "react";
import { FiSettings, FiUser, FiMusic, FiVolume2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import background from "../picture/starbg.gif";
import ProfileHook from "../hook/profile-hook";
import UpdateProfileHook from "../hook/update-profile";
import LoadingButton from "../component/loading-button";
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { profile } = ProfileHook();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { handleUpdate, loading } = UpdateProfileHook();
  useEffect(() => {
    setUsername(profile?.user?.username);
    setEmail(profile?.user?.email);
  }, [profile]);

  const handleUpdateProfile = () => {
    handleUpdate(profile?.user?.user_id, username);
  };

  console.log(profile, username);
  return (
    <div
      className="min-h-screen  text-gray-900"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/home">
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition duration-200 shadow-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center text-blue-600">
            <FiSettings className="mr-3" /> Settings
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 p-4 rounded-xl bg-white shadow-md">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center w-full p-3 rounded-lg transition-all ${
                  activeTab === "profile"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiUser className="mr-3" /> Profile
              </button>
            </nav>
          </div>

          <div className="flex-1 p-6 rounded-xl bg-white shadow-md">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Profile Settings</h2>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">
                        User Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg border bg-white border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        className="w-full p-3 rounded-lg border bg-white border-gray-300"
                        readOnly
                      />
                    </div>

                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition"
                      disabled={loading}
                      onClick={handleUpdateProfile}
                    >
                      {loading ? <LoadingButton /> : "Save Changes"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
