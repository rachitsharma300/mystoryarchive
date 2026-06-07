"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Custom Magazine",
    price: "From ₹1,200",
    tag: "Bestseller",
    desc: "Fully personalized magazine with your memories & stories.",
    emoji: "📖",
  },
  {
    id: 2,
    name: "Photo Album",
    price: "From ₹1,500",
    tag: "Premium",
    desc: "Beautifully bound album with custom layouts.",
    emoji: "🖼️",
  },
  {
    id: 3,
    name: "Recap Reels",
    price: "₹550",
    tag: "New",
    desc: "A cinematic video reel of your best memories.",
    emoji: "🎬",
  },
  {
    id: 4,
    name: "Custom Frame",
    price: "₹650",
    tag: "Popular",
    desc: "Premium framed print to display your favorite moment.",
    emoji: "🪞",
  },
];

const reviews = [
  {
    name: "Simran Agarwal",
    city: "New Delhi",
    text: "Insanely perfect! My partner loved the concept. Everything is top notch.",
    stars: 5,
  },
  {
    name: "Pratika Karnam",
    city: "Ahmedabad",
    text: "Got a 20 pager magazine for my anniversary. The team was very helpful throughout.",
    stars: 5,
  },
  {
    name: "Muskan Agarwal",
    city: "New Delhi",
    text: "They caught the essence I wanted and presented it in the most beautiful way. Exceeded all expectations!",
    stars: 5,
  },
  {
    name: "Ashwin Sharma",
    city: "Pune",
    text: "Very good quality of work and totally worth the price!",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What happens after I place the order?",
    a: "Our team reviews your details and contacts you for confirmation. Once confirmed, we start working and provide updates throughout.",
  },
  {
    q: "How long does the process take?",
    a: "Magazines and albums take 7-10 days to deliver. Recap videos are ready within 2-4 days.",
  },
  {
    q: "How does payment work?",
    a: "50% advance payment to confirm the order. Remaining 50% after design approval before dispatch.",
  },
  {
    q: "Is free shipping available?",
    a: "Yes! We offer free shipping pan India on all orders.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes, up to 3-4 revisions are included. Minor tweaks are always free.",
  },
];

const stats = [
  { value: "500+", label: "Stories Captured" },
  { value: "450+", label: "Keepsakes Delivered" },
  { value: "100+", label: "Happy Reviews" },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
{/* ── HERO ── */}
<section className="relative min-h-screen flex items-center bg-[#f5f0e8] overflow-hidden">
  
  {/* Background texture */}
  <div className="absolute inset-0 opacity-30"
    style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #e8d5b7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4c5a9 0%, transparent 40%)" }} />

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

      {/* ── LEFT SIDE ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-sans-clean font-bold tracking-widest uppercase rounded-full mb-6 w-fit"
        >
          Forever in Art, Forever in Heart
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.05] mb-6 uppercase tracking-tight"
        >
          Your Memories<br />
          <span className="text-amber-600">Archived</span><br />
          Forever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="font-sans-clean text-base text-stone-500 max-w-md mb-10 leading-relaxed"
        >
          Your memories deserve more than a screen. We turn your stories into beautifully crafted keepsakes that you can hold, share, and cherish forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <Link href="/shop?type=magazine"
            className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-sans-clean font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center">
            Shop Magazine
          </Link>
          <Link href="/shop"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-sans-clean font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 text-center">
            Shop Collection
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-stone-900">{stat.value}</p>
              <p className="font-sans-clean text-xs text-stone-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT SIDE ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="relative flex items-center justify-center h-[500px] lg:h-[600px]"
      >
        {/* Static tilted albums — background */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Back album — tilted left */}
          <motion.div
            animate={{ rotate: [-6, -8, -6], y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-10 w-52 h-72 rounded-xl shadow-2xl overflow-hidden border-4 border-white"
            style={{ transform: "rotate(-8deg)" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200 flex flex-col items-center justify-center p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-800/20 to-transparent" />
              <div className="w-32 h-20 bg-stone-300/60 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-2xl">🖼️</span>
              </div>
              <div className="text-center z-10">
                <p className="font-display text-xs font-bold text-stone-700 uppercase tracking-widest">Our Story</p>
                <p className="font-sans-clean text-[10px] text-stone-500 mt-1">2024 Memories</p>
              </div>
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-stone-800/20 flex items-center justify-center">
                <span className="font-display text-[8px] font-bold text-stone-600">MS</span>
              </div>
            </div>
          </motion.div>

          {/* Front album — tilted right */}
          <motion.div
            animate={{ rotate: [5, 7, 5], y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-4 bottom-10 w-52 h-72 rounded-xl shadow-2xl overflow-hidden border-4 border-white"
          >
            <div className="w-full h-full bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 flex flex-col items-center justify-center p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-800/30 to-transparent" />
              <div className="w-32 h-20 bg-pink-200/60 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-2xl">💑</span>
              </div>
              <div className="text-center z-10">
                <p className="font-display text-xs font-bold text-stone-700 uppercase tracking-widest">Poojay</p>
                <p className="font-sans-clean text-[10px] text-stone-500 mt-1 italic">From Engagement to Eternity</p>
              </div>
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/40 flex items-center justify-center">
                <span className="font-display text-[8px] font-bold text-stone-600">MS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CENTER — Animated Flipping Magazine */}
        <div className="relative z-10">
          <FlippingMagazine />
        </div>

      </motion.div>
    </div>
  </div>
</section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="font-sans-clean text-xs tracking-widest uppercase text-amber-500 font-semibold">Our Products</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 mt-3">
              Craft Your Keepsake
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-stone-50 hover:bg-amber-50 rounded-2xl p-6 border border-stone-100 hover:border-amber-200 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-sans-clean font-bold tracking-wider uppercase rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">{p.name}</h3>
                <p className="font-sans-clean text-sm text-stone-500 mb-4 leading-relaxed">{p.desc}</p>
                <p className="font-sans-clean font-bold text-amber-600 text-lg">{p.price}</p>
                <Link href="/shop"
                  className="mt-4 block text-center py-2.5 bg-stone-900 group-hover:bg-amber-500 text-white text-sm font-sans-clean font-semibold rounded-xl transition-all duration-300">
                  Order Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-sans-clean text-xs tracking-widest uppercase text-amber-500 font-semibold">Simple Process</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 mt-3">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Place Order", desc: "Choose your product and pay 50% advance to confirm.", icon: "🛒" },
              { step: "02", title: "Share Content", desc: "Send us your photos, videos and memories via WhatsApp.", icon: "📤" },
              { step: "03", title: "We Design", desc: "Our team crafts your personalized keepsake in 24-48 hrs.", icon: "🎨" },
              { step: "04", title: "Delivered!", desc: "Approve the design and receive your keepsake at home.", icon: "📦" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {item.icon}
                </div>
                <span className="font-sans-clean text-xs text-amber-400 font-bold tracking-widest">{item.step}</span>
                <h3 className="font-display text-xl font-bold text-stone-900 mt-1 mb-2">{item.title}</h3>
                <p className="font-sans-clean text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-sans-clean text-xs tracking-widest uppercase text-amber-500 font-semibold">Testimonials</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 mt-3">What People Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-sans-clean text-sm text-stone-600 leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <p className="font-sans-clean font-semibold text-stone-900 text-sm">{r.name}</p>
                  <p className="font-sans-clean text-xs text-stone-400">{r.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-sans-clean text-xs tracking-widest uppercase text-amber-500 font-semibold">FAQ</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 mt-3">Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-stone-100"
              >
                <h3 className="font-sans-clean font-semibold text-stone-900 mb-2">{faq.q}</h3>
                <p className="font-sans-clean text-sm text-stone-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Archive Your{" "}
              <span className="text-amber-400 italic">Story?</span>
            </h2>
            <p className="font-sans-clean text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Join 500+ happy customers who turned their memories into forever keepsakes.
            </p>
            <Link href="/shop"
              className="inline-block px-10 py-4 bg-amber-500 hover:bg-amber-400 text-white font-sans-clean font-bold text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1">
              Start Your Order
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function FlippingMagazine() {
  const pages = [
    { bg: "from-amber-100 to-stone-200", emoji: "📖", title: "Our Journey", sub: "Chapter 1" },
    { bg: "from-rose-100 to-pink-200", emoji: "💕", title: "Together", sub: "Always" },
    { bg: "from-sky-100 to-blue-200", emoji: "✈️", title: "Adventures", sub: "2024" },
    { bg: "from-green-100 to-emerald-200", emoji: "🌿", title: "Memories", sub: "Forever" },
    { bg: "from-purple-100 to-violet-200", emoji: "⭐", title: "Our Story", sub: "Archived" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
        setFlipping(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const page = pages[currentPage];
  const nextPage = pages[(currentPage + 1) % pages.length];

  return (
    <div className="relative w-64 h-80" style={{ perspective: "1000px" }}>
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-stone-900/20 rounded-full blur-md" />

      {/* Book spine */}
      <div className="absolute left-0 top-0 w-4 h-full bg-stone-700 rounded-l-sm z-20"
        style={{ transform: "rotateY(-30deg) translateX(-6px)", transformOrigin: "left" }} />

      {/* Back page */}
      <div className={`absolute inset-0 rounded-r-xl rounded-l-sm overflow-hidden bg-gradient-to-br ${nextPage.bg} border-2 border-white shadow-xl`}>
        <div className="flex flex-col items-center justify-center h-full p-6">
          <span className="text-4xl mb-3">{nextPage.emoji}</span>
          <p className="font-display text-sm font-bold text-stone-700 uppercase tracking-widest">{nextPage.title}</p>
          <p className="font-sans-clean text-xs text-stone-500 mt-1">{nextPage.sub}</p>
        </div>
      </div>

      {/* Front page — flips */}
      <motion.div
        animate={flipping
          ? { rotateY: -180, transition: { duration: 0.5, ease: "easeInOut" } }
          : { rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" } }
        }
        className={`absolute inset-0 rounded-r-xl rounded-l-sm overflow-hidden bg-gradient-to-br ${page.bg} border-2 border-white shadow-2xl`}
        style={{ transformOrigin: "left center", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        <div className="flex flex-col items-center justify-center h-full p-6">
          <div className="w-full h-28 bg-white/40 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-5xl">{page.emoji}</span>
          </div>
          <p className="font-display text-sm font-bold text-stone-800 uppercase tracking-widest text-center">{page.title}</p>
          <p className="font-sans-clean text-xs text-stone-600 mt-1 italic">{page.sub}</p>
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-stone-800/20 flex items-center justify-center">
            <span className="font-display text-[9px] font-bold text-stone-700">MV</span>
          </div>
        </div>
      </motion.div>

      {/* Page dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
        {pages.map((_, i) => (
          <div key={i}
            className={`rounded-full transition-all duration-300 ${i === currentPage ? "w-4 h-1.5 bg-amber-500" : "w-1.5 h-1.5 bg-stone-300"}`} />
        ))}
      </div>
    </div>
  );
}