"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-sans-clean font-semibold tracking-widest uppercase rounded-full mb-6">
              Forever in Art, Forever in Heart
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-stone-900 leading-tight mb-6"
          >
            Your Memories,{" "}
            <span className="text-amber-500 italic">Archived</span>{" "}
            Forever
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans-clean text-lg text-stone-500 max-w-2xl mx-auto mb-10"
          >
            We turn your stories into beautifully crafted keepsakes — custom magazines, photo albums, recap reels and more. Hold them. Share them. Cherish forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-sans-clean font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5">
              Shop Now
            </Link>
            <Link href="/samples"
              className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-700 font-sans-clean font-semibold rounded-full border border-stone-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              View Samples
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-12 mt-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-amber-500">{stat.value}</p>
                <p className="font-sans-clean text-sm text-stone-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
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