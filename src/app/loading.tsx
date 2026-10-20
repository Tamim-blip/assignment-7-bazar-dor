export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4 py-10">
      {/* Logo / Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
        <span className="text-4xl">🛒</span>
      </div>

      {/* Project Name */}
      <h2 className="text-2xl font-bold text-base-content">
        বাজার দর
      </h2>

      <p className="mt-2 text-center text-sm text-base-content/60">
        আপনার নিত্যপ্রয়োজনীয় পণ্যের দাম লোড হচ্ছে...
      </p>

      {/* Loading Spinner */}
      <div className="mt-6 h-10 w-10 animate-spin rounded-full border-4 border-base-300 border-t-green-600" />

      <p className="mt-4 animate-pulse text-sm font-medium text-green-600">
        অনুগ্রহ করে অপেক্ষা করুন
      </p>
    </div>
  );
}