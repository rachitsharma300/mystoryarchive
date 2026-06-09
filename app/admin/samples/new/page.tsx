"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddSamplePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    category: "Magazine",
    price: 1200,
    originalPrice: 1800,
    pages: 20,
    emoji: "📖",
    description: "",
    isActive: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string | number | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push("/admin/samples");
    }, 2000);
  };

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/admin/samples" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-4 font-sans-clean font-semibold">
          <ArrowLeft size={16} />
          Back to Samples
        </Link>
        <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
          Add New Sample
        </h1>
        <p className="font-sans-clean text-stone-500">
          Create a new product sample for your collection
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl bg-white border border-stone-200 p-8"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <p className="text-5xl mb-4">✨</p>
            <p className="font-display text-2xl font-bold text-stone-900 mb-2">
              Sample Created!
            </p>
            <p className="font-sans-clean text-stone-500">
              Redirecting you back...
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="pb-6 border-b border-stone-200">
              <h2 className="font-display text-lg font-bold text-stone-900 mb-4">
                Basic Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                    Sample Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g., Anniversary Album"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 focus:bg-white transition-all"
                    >
                      <option>Magazine</option>
                      <option>Album</option>
                      <option>Video</option>
                      <option>Frame</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                      Emoji Icon *
                    </label>
                    <input
                      type="text"
                      value={formData.emoji}
                      onChange={(e) => handleChange("emoji", e.target.value)}
                      placeholder="📖"
                      maxLength={2}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 focus:bg-white transition-all text-2xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Describe this sample..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 placeholder-stone-300 outline-none focus:border-amber-400 focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="pb-6 border-b border-stone-200">
              <h2 className="font-display text-lg font-bold text-stone-900 mb-4">
                Pricing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                    Sale Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      handleChange("price", parseFloat(e.target.value))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                    Original Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      handleChange("originalPrice", parseFloat(e.target.value))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-sans-clean text-sm text-amber-700">
                  Discount:{" "}
                  <span className="font-bold">
                    {Math.round(
                      ((formData.originalPrice - formData.price) /
                        formData.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="pb-6 border-b border-stone-200">
              <h2 className="font-display text-lg font-bold text-stone-900 mb-4">
                Specifications
              </h2>

              <div>
                <label className="font-sans-clean text-sm font-semibold text-stone-700 block mb-2">
                  Number of Pages *
                </label>
                <input
                  type="number"
                  value={formData.pages}
                  onChange={(e) =>
                    handleChange("pages", parseFloat(e.target.value))
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 font-sans-clean text-sm text-stone-800 outline-none focus:border-amber-400 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Status */}
            <div className="pb-6">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => handleChange("isActive", e.target.checked)}
                  className="w-5 h-5 rounded border-stone-300 text-amber-500 cursor-pointer"
                />
                <span className="font-sans-clean font-semibold text-stone-900">
                  Publish this sample immediately
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-stone-200">
              <Button type="submit" size="lg" variant="default">
                Create Sample
              </Button>
              <Button
                type="button"
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/admin/samples">Cancel</Link>
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
