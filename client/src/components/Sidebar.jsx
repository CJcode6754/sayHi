import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import Placeholder from "../assets/placeholder.jpg";

export const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const onlineUsers = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="flex flex-col w-20 h-screen bg-white border-r border-base-300 lg:w-72">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-base-300">
        <Users className="size-5 text-zinc-600" />
        <span className="hidden text-base font-semibold lg:block text-zinc-700">
          Contacts
        </span>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
              selectedUser?._id === user._id
                ? "bg-zinc-100 ring-1 ring-zinc-200"
                : "hover:bg-zinc-100"
            }`}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || Placeholder}
                alt={user.fullName}
                className="object-cover rounded-full size-12"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 bg-green-500 rounded-full size-3 ring-2 ring-white" />
              )}
            </div>

            {/* User Info */}
            <div className="hidden min-w-0 text-left lg:block">
              <div className="text-sm font-medium truncate text-zinc-800">
                {user.fullName}
              </div>
              <div className="text-xs text-zinc-500">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {users.length === 0 && (
          <div className="py-6 text-sm text-center text-zinc-400">
            No users found
          </div>
        )}
      </div>
    </aside>
  );
};
