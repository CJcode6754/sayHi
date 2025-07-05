import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";
import Placeholder from '../assets/placeholder.jpg';
const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({profilePic: base64Image});
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-base-100">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="bg-base-300 rounded-xl p-6">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-zinc-500 mt-1">Your profile information</p>
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <img
              src={selectedImg || authUser?.profilePic || Placeholder}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-base-300"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-1 right-1 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-4 h-4 text-base-200" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-zinc-500">
            {isUpdatingProfile
              ? "Uploading..."
              : "Click the camera icon to update your photo"}
          </p>
        </div>

        {/* Profile Details */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm text-zinc-500 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-zinc-300 text-base">
              {authUser?.fullname || "N/A"}
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-zinc-500 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-zinc-300 text-base">
              {authUser?.email || "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
