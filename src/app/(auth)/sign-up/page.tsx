'use client';

import { signIn, signUp } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignUp() {
  const router = useRouter();

  const HandleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const name = userData.name as string;
    const email = userData.email as string;
    const password = userData.password as string;
    const confirmPassword = userData.confirmPassword as string;

    if (password !== confirmPassword) {
      toast.error('দুটি পাসওয়ার্ড মিলছে না');
      return;
    }

    const { data, error } = await signUp.email({
      name,
      email,
      password,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message ?? 'Sign up failed');
      return;
    }

    if (data) {
      toast.success('Sign Up successful');
      router.push('/');
    }
  };

  const HandleGoogleSignIn = async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  const HandleGitHubSignIn = async () => {
    await signIn.social({
      provider: 'github',
      callbackURL: '/',
    });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white px-3 py-6 sm:px-5 sm:py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form onSubmit={HandleSignUp} className="space-y-4">
          <div>
            <label
              htmlFor="signup-name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              নাম
            </label>

            <input
              id="signup-name"
              type="text"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              required
              className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-4"
            />
          </div>

          <div>
            <label
              htmlFor="signup-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              ইমেইল
            </label>

            <input
              id="signup-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-4"
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="signup-password"
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-4"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              id="confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="আবার লিখুন"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-4"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 sm:my-6 sm:gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="shrink-0 text-xs text-gray-400">অথবা</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="space-y-3">
          <button
            onClick={HandleGoogleSignIn}
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:gap-3"
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
              <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z" />
              <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z" />
              <path fill="#FBBC05" d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z" />
              <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z" />
            </svg>

            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            onClick={HandleGitHubSignIn}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:gap-3"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.13c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08v3.13c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>

            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm leading-6 text-gray-500 sm:mt-7">
          অ্যাকাউন্ট আছে?{' '}
          <Link
            href="/signin"
            className="font-semibold text-green-600 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
}