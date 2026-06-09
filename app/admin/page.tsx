"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Users, TrendingUp, Package } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Orders",
    value: "450+",
    icon: ShoppingCart,
    color: "bg-blue-50 text-blue-600",
    link: "/admin/orders",
  },
  {
    label: "Active Users",
    value: "156",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    link: "/admin/users",
  },
  {
    label: "Total Revenue",
    value: "₹5.4L",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
    link: "/admin/analytics",
  },
  {
    label: "Samples Available",
    value: "30",
    icon: Package,
    color: "bg-orange-50 text-orange-600",
    link: "/admin/samples",
  },
];

const recentOrders = [
  {
    id: "MV001",
    customer: "Rahul Sharma",
    product: "Custom Magazine",
    amount: "₹1,200",
    status: "dispatched",
  },
  {
    id: "MV002",
    customer: "Priya Singh",
    product: "Photo Album",
    amount: "₹1,500",
    status: "delivered",
  },
  {
    id: "MV003",
    customer: "Muskan Agarwal",
    product: "Recap Reel",
    amount: "₹550",
    status: "processing",
  },
  {
    id: "MV004",
    customer: "Ashwin Sharma",
    product: "Custom Frame",
    amount: "₹650",
    status: "pending",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  dispatched: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={stat.link}>
                <div className="rounded-2xl bg-white border border-stone-200 p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <p className="font-sans-clean text-sm text-stone-500 mb-1">
                    {stat.label}
                  </p>
                  <p className="font-display text-3xl font-bold text-stone-900">
                    {stat.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl bg-white border border-stone-200 overflow-hidden"
      >
        <div className="p-6 border-b border-stone-200">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Recent Orders
            </h2>
            <Link
              href="/admin/orders"
              className="font-sans-clean text-sm text-amber-600 hover:text-amber-700 font-semibold"
            >
              View All →
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-3 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Customer
                </th>
                <th className="px-6 py-3 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Product
                </th>
                <th className="px-6 py-3 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Amount
                </th>
                <th className="px-6 py-3 text-left font-sans-clean font-semibold text-stone-700 text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr
                  key={order.id}
                  className="border-b border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  <td className="px-6 py-4 font-sans-clean font-semibold text-stone-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 font-sans-clean text-stone-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 font-sans-clean text-stone-600">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 font-sans-clean font-semibold text-stone-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[order.status as keyof typeof statusColors]
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6">
          <h3 className="font-display text-lg font-bold text-stone-900 mb-3">
            📊 This Month
          </h3>
          <div className="space-y-2">
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">45</span> orders placed
            </p>
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">₹1.2L</span> revenue generated
            </p>
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">32</span> new customers
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6">
          <h3 className="font-display text-lg font-bold text-stone-900 mb-3">
            ✅ Top Performing
          </h3>
          <div className="space-y-2">
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">Custom Magazine</span> - Best seller
            </p>
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">Anniversary</span> - Most popular occasion
            </p>
            <p className="font-sans-clean text-sm text-stone-600">
              <span className="font-semibold">98%</span> customer satisfaction
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
