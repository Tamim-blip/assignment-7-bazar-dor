
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-12 text-center">
      {/* 404 Illustration */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-green-500/10">
        <span className="text-5xl">🛒</span>
      </div>

      {/* Error Code */}
      <h1 className="text-7xl font-extrabold tracking-tight text-green-600 sm:text-8xl">
        404
      </h1>

      {/* Bengali Message */}
      <h2 className="mt-5 text-xl font-bold text-base-content sm:text-2xl">
        দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-base-content/70 sm:text-base">
        আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
        নাম পরিবর্তন করা হয়েছে অথবা ঠিকানাটি ভুল।
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        <span aria-hidden="true">←</span>
        <span>হোম পেজে ফিরে যান</span>
      </Link>

      <p className="mt-6 text-xs text-base-content/50">
        বাজার দর — প্রতিদিনের বাজারের দাম এক নজরে
      </p>
    </div>
  );
}
