"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
            Analytics & Reports
          </h1>
          <p className="font-sans-clean text-stone-500">
            Business insights and performance metrics
          </p>
        </div>
        <Button asChild size="lg" variant="outline">
          <a href="#" download>
            <Download size={18} />
            Export Report
          </a>
        </Button>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            label: "Monthly Revenue",
            value: "₹1,24,500",
            change: "+12.5%",
            trend: "up",
          },
          {
            label: "Orders This Month",
            value: "45",
            change: "+8.2%",
            trend: "up",
          },
          {
            label: "Avg Order Value",
            value: "₹2,765",
            change: "-3.1%",
            trend: "down",
          },
          {
            label: "Customer Satisfaction",
            value: "98%",
            change: "+2%",
            trend: "up",
          },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-white border border-stone-200 p-6"
          >
            <p className="font-sans-clean text-sm text-stone-500 mb-2">
              {metric.label}
            </p>
            <div className="flex items-end justify-between">
              <p className="font-display text-3xl font-bold text-stone-900">
                {metric.value}
              </p>
              <div
                className={`flex items-center gap-1 font-sans-clean text-sm font-semibold ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {metric.change}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Revenue Chart */}
        <div className="rounded-2xl bg-white border border-stone-200 p-6">
          <h3 className="font-display text-lg font-bold text-stone-900 mb-6">
            Revenue Trend
          </h3>
          <div className="space-y-4">
            {[
              { month: "Jan", revenue: 45000, width: "40%" },
              { month: "Feb", revenue: 52000, width: "46%" },
              { month: "Mar", revenue: 61000, width: "55%" },
              { month: "Apr", revenue: 58000, width: "52%" },
              { month: "May", revenue: 75000, width: "67%" },
              { month: "Jun", revenue: 124500, width: "100%" },
            ].map((item) => (
              <div key={item.month}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans-clean text-sm text-stone-600">
                    {item.month}
                  </span>
                  <span className="font-sans-clean text-sm font-semibold text-stone-900">
                    ₹{(item.revenue / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.width }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="rounded-2xl bg-white border border-stone-200 p-6">
          <h3 className="font-display text-lg font-bold text-stone-900 mb-6">
            Sales by Category
          </h3>
          <div className="space-y-4">
            {[
              { category: "Magazine", sales: 145, color: "bg-blue-500" },
              { category: "Album", sales: 98, color: "bg-purple-500" },
              { category: "Video Reel", sales: 67, color: "bg-orange-500" },
              { category: "Frame", sales: 43, color: "bg-green-500" },
            ].map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans-clean text-sm text-stone-600">
                    {item.category}
                  </span>
                  <span className="font-sans-clean text-sm font-semibold text-stone-900">
                    {item.sales} orders
                  </span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.sales / 145) * 100}%` }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className={`${item.color} h-full rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Top Products & Occasions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Top Products */}
        <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
          <div className="p-6 border-b border-stone-200">
            <h3 className="font-display text-lg font-bold text-stone-900">
              Top Products
            </h3>
          </div>
          <div>
            {[
              { name: "Custom Magazine", orders: 145, emoji: "📖" },
              { name: "Photo Album", orders: 98, emoji: "🖼️" },
              { name: "Recap Reel", orders: 67, emoji: "🎬" },
            ].map((product) => (
              <div
                key={product.name}
                className="p-6 border-b border-stone-200 last:border-b-0 flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{product.emoji}</span>
                  <p className="font-sans-clean font-semibold text-stone-900">
                    {product.name}
                  </p>
                </div>
                <p className="font-display font-bold text-stone-900">
                  {product.orders}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Occasions */}
        <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
          <div className="p-6 border-b border-stone-200">
            <h3 className="font-display text-lg font-bold text-stone-900">
              Popular Occasions
            </h3>
          </div>
          <div>
            {[
              { occasion: "Anniversary", count: 52 },
              { occasion: "Birthday", count: 89 },
              { occasion: "Wedding", count: 43 },
            ].map((item) => (
              <div
                key={item.occasion}
                className="p-6 border-b border-stone-200 last:border-b-0 flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <p className="font-sans-clean font-semibold text-stone-900">
                  {item.occasion}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                      style={{ width: `${(item.count / 89) * 100}%` }}
                    />
                  </div>
                  <p className="font-display font-bold text-stone-900 w-10 text-right">
                    {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
