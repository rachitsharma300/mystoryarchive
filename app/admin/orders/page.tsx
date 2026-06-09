"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Eye, Edit2, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  advance: number;
  status: "pending" | "processing" | "designed" | "dispatched" | "delivered";
  date: string;
  occasion: string;
}

const mockOrders: Order[] = [
  {
    id: "MV001",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    product: "Custom Magazine",
    amount: 1200,
    advance: 600,
    status: "dispatched",
    date: "2025-06-05",
    occasion: "Anniversary",
  },
  {
    id: "MV002",
    customer: "Priya Singh",
    email: "priya@example.com",
    product: "Photo Album",
    amount: 1500,
    advance: 750,
    status: "delivered",
    date: "2025-05-28",
    occasion: "Wedding",
  },
  {
    id: "MV003",
    customer: "Muskan Agarwal",
    email: "muskan@example.com",
    product: "Recap Reel",
    amount: 550,
    advance: 275,
    status: "processing",
    date: "2025-06-08",
    occasion: "Birthday",
  },
  {
    id: "MV004",
    customer: "Ashwin Sharma",
    email: "ashwin@example.com",
    product: "Custom Frame",
    amount: 650,
    advance: 325,
    status: "pending",
    date: "2025-06-09",
    occasion: "Housewarming",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  designed: "bg-purple-100 text-purple-700",
  dispatched: "bg-orange-100 text-orange-700",
  delivered: "bg-green-100 text-green-700",
};

const statusLabels = {
  pending: "Pending",
  processing: "Processing",
  designed: "Design Ready",
  dispatched: "Dispatched",
  delivered: "Delivered",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.includes(searchTerm) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
          Orders Management
        </h1>
        <p className="font-sans-clean text-stone-500">
          Manage and track all customer orders
        </p>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-stone-400" size={18} />
          <input
            type="text"
            placeholder="Search by Order ID or Customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-stone-200 bg-white font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 transition-all"
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 rounded-lg border border-stone-200 bg-white font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 transition-all"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="designed">Design Ready</option>
          <option value="dispatched">Dispatched</option>
          <option value="delivered">Delivered</option>
        </select>
      </motion.div>

      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl bg-white border border-stone-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Customer
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Product
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Amount
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Status
                </th>
                <th className="px-6 py-4 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, i) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-sans-clean font-semibold text-stone-900">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-sans-clean font-semibold text-stone-900">
                        {order.customer}
                      </p>
                      <p className="font-sans-clean text-xs text-stone-500">
                        {order.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-sans-clean text-stone-600">
                    {order.product}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-sans-clean font-semibold text-stone-900">
                        ₹{order.amount.toLocaleString()}
                      </p>
                      <p className="font-sans-clean text-xs text-stone-500">
                        Advance: ₹{order.advance.toLocaleString()}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[order.status]
                      }`}
                    >
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit2 size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download size={16} />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans-clean text-stone-500">No orders found</p>
          </div>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Pending", count: 1, color: "bg-yellow-50" },
          { label: "Processing", count: 1, color: "bg-blue-50" },
          { label: "Designed", count: 0, color: "bg-purple-50" },
          { label: "Dispatched", count: 1, color: "bg-orange-50" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg ${stat.color} p-4 border border-stone-200`}
          >
            <p className="font-sans-clean text-xs text-stone-600 mb-1">
              {stat.label}
            </p>
            <p className="font-display text-2xl font-bold text-stone-900">
              {stat.count}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
