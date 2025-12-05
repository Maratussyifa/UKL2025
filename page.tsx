"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT PANEL */}
      <div className="lg:col-span-2 space-y-6">

        {/* Search + Icon */}
        <div className="flex items-center gap-4 bg-white px-4 py-3 rounded-full shadow">
          <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center">
            🔔
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none"
          />
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image src="/kumpulanbuku.jpg" alt="Book" fill className="object-cover" />
          </div>

          {/* Description */}
          <div className="bg-pink-200 rounded-2xl p-4 mt-6">
            <h2 className="font-bold text-lg"> Hello, inaa </h2>
            <p className="text-sm text-gray-700 mt-1">
              Welcome back to your reading journey! Let's explore new books
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="bg-white rounded-3xl shadow-xl p-6 h-fit">

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src="/profile.jpg" alt="Avatar" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Inoei</h3>
            <p className="text-sm text-black font-semibold -mt-1">Student</p>
          </div>
        </div>

        <h4 className="mt-8 font-semibold">Your Favorite</h4>

        <div className="grid grid-cols-4 gap-3 mt-3">
          {["/novel1.jpg", "/novel2.jpg", "/novel3.jpg", "/novel4.jpg"].map(
            (src, i) => (
              <div key={i} className="relative h-16 rounded-xl overflow-hidden">
                <Image src={src} alt={`Novel ${i + 1}`} fill className="object-cover" />
              </div>
            )
          )}
        </div>


      </div>
    </div>
  );
}
