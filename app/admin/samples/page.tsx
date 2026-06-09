"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Sample {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  pages: number;
  emoji: string;
  isActive: boolean;
  orders: number;
}

const mockSamples: Sample[] = [
  {
    id: 1,
    name: "Custom Magazine",
    category: "Magazine",
    price: 1200,
    originalPrice: 1800,
    pages: 20,
    emoji: "📖",
    isActive: true,
    orders: 145,
  },
  {
    id: 2,
    name: "Photo Album",
    category: "Album",
    price: 1500,
    originalPrice: 2000,
    pages: 30,
    emoji: "🖼️",
    isActive: true,
    orders: 98,
  },
  {
    id: 3,
    name: "Recap Reel",
    category: "Video",
    price: 550,
    originalPrice: 800,
    pages: 1,
    emoji: "🎬",
    isActive: true,
    orders: 67,
  },
  {
    id: 4,
    name: "Custom Frame",
    category: "Frame",
    price: 650,
    originalPrice: 900,
    pages: 1,
    emoji: "🪞",
    isActive: true,
    orders: 43,
  },
  {
    id: 5,
    name: "Birthday Magazine",
    category: "Magazine",
    price: 1400,
    originalPrice: 2000,
    pages: 20,
    emoji: "🎂",
    isActive: true,
    orders: 52,
  },
  {
    id: 6,
    name: "Anniversary Album",
    category: "Album",
    price: 1800,
    originalPrice: 2500,
    pages: 30,
    emoji: "💑",
    isActive: true,
    orders: 38,
  },
];

export default function SamplesPage() {
  const [samples, setSamples] = useState(mockSamples);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredSamples = samples.filter((sample) => {
    const matchesSearch = sample.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || sample.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    setSamples(samples.filter((s) => s.id !== id));
  };

  const categories = [
    "all",
    ...Array.from(new Set(samples.map((s) => s.category))),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
            Samples Management
          </h1>
          <p className="font-sans-clean text-stone-500">
            Manage your product samples and templates
          </p>
        </div>
        <Button asChild size="lg" variant="default">
          <Link href="/admin/samples/new">
            <Plus size={18} />
            Add Sample
          </Link>
        </Button>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search samples..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 transition-all"
          />
        </div>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border border-stone-200 bg-white font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 transition-all"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Samples Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSamples.map((sample, i) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-stone-200 bg-white overflow-hidden hover:shadow-lg transition-all group"
          >
            {/* Image Area */}
            <div className="relative h-40 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition-transform">
                {sample.emoji}
              </span>
              <div className="absolute top-3 right-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    sample.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {sample.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-stone-900 mb-1">
                {sample.name}
              </h3>
              <p className="font-sans-clean text-xs text-stone-500 mb-4">
                {sample.category} • {sample.pages} page{sample.pages > 1 ? "s" : ""}
              </p>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-200">
                <div>
                  <p className="font-sans-clean text-xs text-stone-500">Price</p>
                  <p className="font-display font-bold text-stone-900">
                    ₹{sample.price.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-sans-clean text-xs text-stone-500">Orders</p>
                  <p className="font-display font-bold text-stone-900">
                    {sample.orders}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye size={16} />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit2 size={16} />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(sample.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredSamples.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="font-sans-clean text-stone-500">No samples found</p>
        </motion.div>
      )}
    </div>
  );
}
