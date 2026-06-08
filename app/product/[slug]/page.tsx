"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, Check, Star, Shield, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const productData: Record<string, {
  name: string;
  price: number;
  originalPrice: number;
  tag: string;
  emoji: string;
  desc: string;
  longDesc: string;
  deliveryDays: string;
  pages: string;
  includes: string[];
  occasions: string[];
  steps: string[];
}> = {
  "custom-magazine": {
    name: "Custom Magazine",
    price: 1200,
    originalPrice: 1800,
    tag: "Bestseller",
    emoji: "📖",
    desc: "Fully personalized magazine with your memories and stories.",
    longDesc: "Turn your most cherished memories into a professionally designed custom magazine. Our team of expert designers will craft every page to tell your unique story — from the cover to the last page.",
    deliveryDays: "7-10 days",
    pages: "10-30 pages",
    includes: ["Custom cover design", "Professional layout", "High-quality print", "Free shipping", "Up to 4 revisions"],
    occasions: ["Birthday", "Anniversary", "Farewell", "Friendship", "Wedding", "Custom"],
    steps: ["Place order and pay 50% advance", "Share your photos and stories via WhatsApp", "Receive design preview in 24-48 hrs", "Approve and pay remaining 50%", "Delivered to your doorstep"],
  },
  "photo-album": {
    name: "Photo Album",
    price: 1500,
    originalPrice: 2000,
    tag: "Premium",
    emoji: "🖼️",
    desc: "Beautifully bound album with custom layouts and premium paper quality.",
    longDesc: "A timeless photo album that preserves your memories for generations. Hardbound cover, premium matte paper, and custom layouts make this the perfect keepsake.",
    deliveryDays: "7-10 days",
    pages: "20-50 pages",
    includes: ["Hardbound cover", "Premium matte paper", "Custom layout", "Free shipping", "Up to 4 revisions"],
    occasions: ["Wedding", "Anniversary", "Birthday", "Travel", "Family", "Custom"],
    steps: ["Place order and pay 50% advance", "Share your photos via WhatsApp", "Receive design preview in 24-48 hrs", "Approve and pay remaining 50%", "Delivered to your doorstep"],
  },
  "recap-reel": {
    name: "Recap Reel",
    price: 550,
    originalPrice: 800,
    tag: "New",
    emoji: "🎬",
    desc: "A cinematic video reel of your best memories.",
    longDesc: "A beautifully edited 60-90 second video reel of your best moments. Perfect for sharing on Instagram, WhatsApp, or keeping as a digital memory.",
    deliveryDays: "2-4 days",
    pages: "60-90 sec",
    includes: ["Cinematic editing", "Background music", "Transitions and effects", "HD quality export", "Up to 2 revisions"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Farewell", "New Year", "Custom"],
    steps: ["Place order and pay full amount", "Share your photos and videos via WhatsApp", "Receive preview in 24 hrs", "Approve and receive final file"],
  },
  "custom-frame": {
    name: "Custom Frame",
    price: 650,
    originalPrice: 900,
    tag: "Popular",
    emoji: "🪞",
    desc: "Premium framed print to display your favorite moment on any wall.",
    longDesc: "Transform your favorite photo into a stunning wall art piece. Premium quality frame with UV-protected glass for long-lasting display.",
    deliveryDays: "5-7 days",
    pages: "A4 / A3",
    includes: ["Premium wood frame", "UV-protected glass", "High-res print", "Free shipping", "Ready to hang"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Housewarming", "Valentine", "Custom"],
    steps: ["Place order and pay full amount", "Share your photo via WhatsApp", "Receive design preview", "Approve and get delivered"],
  },
  "birthday-magazine": {
    name: "Birthday Magazine",
    price: 1400,
    originalPrice: 2000,
    tag: "Trending",
    emoji: "🎂",
    desc: "Surprise your loved one with a birthday-themed custom magazine.",
    longDesc: "Make their birthday unforgettable with a magazine dedicated entirely to them. Features their photos, memories, messages from friends and family, and more.",
    deliveryDays: "7-10 days",
    pages: "10-20 pages",
    includes: ["Birthday theme design", "Custom cover", "Messages from loved ones", "Free shipping", "Up to 4 revisions"],
    occasions: ["Birthday", "Milestone Birthday", "Surprise Gift", "Custom"],
    steps: ["Place order and pay 50% advance", "Share photos and messages via WhatsApp", "Receive design preview in 24-48 hrs", "Approve and pay remaining 50%", "Delivered to your doorstep"],
  },
  "anniversary-album": {
    name: "Anniversary Album",
    price: 1800,
    originalPrice: 2500,
    tag: "Premium",
    emoji: "💑",
    desc: "Celebrate your love story with a beautifully crafted anniversary photo album.",
    longDesc: "Relive every beautiful moment of your journey together. This premium anniversary album is crafted to celebrate your love story from the very beginning.",
    deliveryDays: "7-10 days",
    pages: "30-50 pages",
    includes: ["Luxury hardbound cover", "Premium paper", "Custom love story layout", "Free shipping", "Up to 4 revisions"],
    occasions: ["1st Anniversary", "25th Anniversary", "50th Anniversary", "Valentine", "Custom"],
    steps: ["Place order and pay 50% advance", "Share your photos and story via WhatsApp", "Receive design preview in 24-48 hrs", "Approve and pay remaining 50%", "Delivered to your doorstep"],
  },
};

const reviews = [
  { name: "Simran A.", city: "Delhi", text: "Absolutely loved it! Exceeded all expectations.", stars: 5 },
  { name: "Rahul M.", city: "Mumbai", text: "Perfect gift for my parents anniversary. They cried happy tears!", stars: 5 },
  { name: "Priya K.", city: "Bangalore", text: "Amazing quality and super fast delivery. Will order again!", stars: 5 },
];

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productData[slug];

  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-6xl mb-4">404</p>
          <h1 className="font-display text-2xl font-bold text-stone-900 mb-4">Product not found</h1>
          <Link href="/shop" className="px-6 py-3 bg-amber-500 text-white rounded-full font-sans-clean font-semibold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const totalPrice = product.price * quantity;
  const advanceAmount = Math.round(totalPrice * 0.5);

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-20">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 font-sans-clean text-sm text-stone-400">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-amber-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-24"
          >
            {/* Main Display */}
            <div className="relative bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 rounded-3xl overflow-hidden h-96 flex items-center justify-center border border-stone-100">
              <motion.span
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="text-9xl"
              >
                {product.emoji}
              </motion.span>
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-amber-500 text-white text-xs font-sans-clean font-bold rounded-full">
                {product.tag}
              </span>
              <span className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-sans-clean font-bold rounded-full">
                {discount}% OFF
              </span>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: <Truck size={16} />, label: "Free Shipping" },
                { icon: <Shield size={16} />, label: "100% Secure" },
                { icon: <RefreshCw size={16} />, label: "Free Revisions" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-1.5 bg-white rounded-xl p-3 border border-stone-100">
                  <span className="text-amber-500">{badge.icon}</span>
                  <span className="font-sans-clean text-xs text-stone-500 text-center">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Product Info + Order */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 mb-3">
              {product.name}
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-sans-clean text-sm text-stone-500">4.9 (127 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl font-bold text-stone-900">
                {"Rs. " + product.price.toLocaleString()}
              </span>
              <span className="font-sans-clean text-lg text-stone-400 line-through">
                {"Rs. " + product.originalPrice.toLocaleString()}
              </span>
              <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-sm font-sans-clean font-bold rounded-full">
                Save {"Rs. " + (product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>

            <p className="font-sans-clean text-stone-500 leading-relaxed mb-8">
              {product.longDesc}
            </p>

            {/* Occasion Selector */}
            <div className="mb-6">
              <label className="font-sans-clean text-sm font-semibold text-stone-700 mb-3 block">
                Select Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {product.occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={
                      "px-4 py-2 rounded-full font-sans-clean text-sm font-medium transition-all duration-200 " +
                      (selectedOccasion === occ
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-600")
                    }
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans-clean text-sm font-semibold text-stone-700 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 font-sans-clean font-bold text-stone-700 transition-colors flex items-center justify-center text-lg"
                >
                  -
                </button>
                <span className="font-display text-xl font-bold text-stone-900 w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 font-sans-clean font-bold text-stone-700 transition-colors flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-6">
              <p className="font-sans-clean text-sm font-semibold text-stone-700 mb-2">Payment Breakdown</p>
              <div className="flex justify-between font-sans-clean text-sm text-stone-600 mb-1">
                <span>Total Amount</span>
                <span className="font-semibold">{"Rs. " + totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-sans-clean text-sm text-stone-600 mb-1">
                <span>Pay Now (50% advance)</span>
                <span className="font-semibold text-amber-600">{"Rs. " + advanceAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-sans-clean text-sm text-stone-600">
                <span>Pay After Approval</span>
                <span className="font-semibold">{"Rs. " + (totalPrice - advanceAmount).toLocaleString()}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={"/checkout?product=" + slug + "&qty=" + quantity + "&occasion=" + selectedOccasion}
                className="flex-1 py-4 bg-amber-500 hover:bg-amber-600 text-white font-sans-clean font-bold text-base rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
              >
                {"Order Now — Rs. " + advanceAmount.toLocaleString() + " Advance"}
              </Link>
              <a
                href="https://wa.me/917903316723"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-sans-clean font-semibold rounded-2xl text-center transition-all duration-300"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Delivery info */}
            <div className="flex items-center gap-2 font-sans-clean text-sm text-stone-500">
              <Truck size={14} className="text-green-500" />
              <span>Free delivery in <span className="font-semibold text-stone-700">{product.deliveryDays}</span></span>
              <span className="mx-2">•</span>
              <span>{product.pages}</span>
            </div>

            {/* Tabs */}
            <div className="mt-10 border-t border-stone-100 pt-8">
              <div className="flex gap-6 mb-6 border-b border-stone-100">
                {["details", "process", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={
                      "pb-3 font-sans-clean text-sm font-semibold capitalize transition-all " +
                      (activeTab === tab
                        ? "text-amber-600 border-b-2 border-amber-500"
                        : "text-stone-400 hover:text-stone-600")
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "details" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="font-sans-clean text-sm font-semibold text-stone-700 mb-3">What is included</p>
                  <ul className="space-y-2">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-sans-clean text-sm text-stone-600">
                        <Check size={14} className="text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === "process" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="font-sans-clean text-sm font-semibold text-stone-700 mb-3">How it works</p>
                  <ol className="space-y-3">
                    {product.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-sans-clean text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="font-sans-clean text-sm text-stone-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.name} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(r.stars)].map((_, j) => (
                          <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="font-sans-clean text-sm text-stone-600 mb-2">{r.text}</p>
                      <p className="font-sans-clean text-xs font-semibold text-stone-700">{r.name} — {r.city}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}