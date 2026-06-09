"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, Phone, Calendar, Ban, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;
  isActive: boolean;
  lastOrder: string;
}

const mockUsers: User[] = [
  {
    id: "U001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    totalOrders: 5,
    totalSpent: 6800,
    joinDate: "2024-03-15",
    isActive: true,
    lastOrder: "2025-06-05",
  },
  {
    id: "U002",
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "+91 87654 32109",
    totalOrders: 3,
    totalSpent: 4500,
    joinDate: "2024-05-20",
    isActive: true,
    lastOrder: "2025-05-28",
  },
  {
    id: "U003",
    name: "Muskan Agarwal",
    email: "muskan@example.com",
    phone: "+91 76543 21098",
    totalOrders: 8,
    totalSpent: 9200,
    joinDate: "2024-01-10",
    isActive: true,
    lastOrder: "2025-06-08",
  },
  {
    id: "U004",
    name: "Ashwin Sharma",
    email: "ashwin@example.com",
    phone: "+91 65432 10987",
    totalOrders: 2,
    totalSpent: 2100,
    joinDate: "2024-06-01",
    isActive: false,
    lastOrder: "2025-04-15",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.includes(searchTerm)
    );
  });

  const handleToggleStatus = (id: string) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const stats = {
    total: users.length,
    active: users.filter((u) => u.isActive).length,
    totalSpent: users.reduce((sum, u) => sum + u.totalSpent, 0),
    totalOrders: users.reduce((sum, u) => sum + u.totalOrders, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
          Users Management
        </h1>
        <p className="font-sans-clean text-stone-500">
          View and manage all registered users
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Users", value: stats.total, color: "bg-blue-50" },
          { label: "Active Users", value: stats.active, color: "bg-green-50" },
          {
            label: "Total Revenue",
            value: `₹${(stats.totalSpent / 100000).toFixed(1)}L`,
            color: "bg-purple-50",
          },
          {
            label: "Total Orders",
            value: stats.totalOrders,
            color: "bg-orange-50",
          },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg ${stat.color} p-4 border border-stone-200`}
          >
            <p className="font-sans-clean text-xs text-stone-600 mb-1">
              {stat.label}
            </p>
            <p className="font-display text-2xl font-bold text-stone-900">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <Search className="absolute left-4 top-3.5 text-stone-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, email, or user ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-stone-200 bg-white font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 transition-all"
        />
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-white border border-stone-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  User ID
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Contact
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Orders
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Spent
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Joined
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-sans-clean font-semibold text-stone-900">
                      {user.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-sans-clean font-semibold text-stone-900">
                      {user.name}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-sans-clean text-sm text-stone-600">
                        <Mail size={14} />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-2 font-sans-clean text-sm text-stone-600">
                        <Phone size={14} />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-sans-clean font-semibold text-stone-900">
                      {user.totalOrders}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-sans-clean font-semibold text-stone-900">
                      ₹{user.totalSpent.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-sans-clean text-xs text-stone-500">
                      <Calendar size={14} />
                      {new Date(user.joinDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => handleToggleStatus(user.id)}
                      variant={user.isActive ? "default" : "outline"}
                      size="sm"
                      className="gap-1"
                    >
                      {user.isActive ? (
                        <>
                          <Check size={14} />
                          Active
                        </>
                      ) : (
                        <>
                          <Ban size={14} />
                          Banned
                        </>
                      )}
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans-clean text-stone-500">No users found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
