
'use client'

import { signOut, updateUser, useSession } from '@/lib/auth-client';
import Image from 'next/image';

const ProfilePage = () => {
  const { data: session } = useSession();

  const HandleUserChange = async (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const userData = Object.fromEntries(formData.entries())

    await updateUser({
       name : userData.name as string
    })


  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mb-8">
        <p className="text-2xl font-bold">আমার প্রোফাইল</p>
        <p className="mt-2 text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col justify-between gap-5 rounded-2xl bg-base-200 p-6 shadow-sm sm:flex-row sm:items-center md:p-8">
        <div className="flex items-center gap-4">
          {session?.user.image ? (
            <Image
              className="rounded-xl object-cover"
              src={session.user.image}
              alt="Profile Image"
              height={70}
              width={70}
            />
          ) : (
            <div className="flex h-17.5 w-17.5 items-center justify-center rounded-xl bg-base-300 text-2xl font-bold">
              {session?.user.name?.charAt(0) || 'U'}
            </div>
          )}

          <div className="min-w-0">
            <p className="font-bold text-lg">
              {session?.user.name || 'ব্যবহারকারী'}
            </p>
            <p className="break-all text-sm text-base-content/70">
              {session?.user.email}
            </p>
          </div>
        </div>

        <button
          onClick={() => signOut()}
          className="self-start rounded-lg px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500/10 sm:self-auto"
        >
          ↩ সাইন আউট
        </button>
      </div>

      {/* Profile Information */}
      <div className="mt-8 rounded-2xl bg-base-200 p-6 shadow-sm md:p-8">
        <div className="mb-6 border-b border-base-300 pb-4">
          <p className="text-lg font-bold">ব্যক্তিগত তথ্য</p>
          <p className="mt-1 text-sm text-base-content/70">
            আপনার প্রোফাইলের তথ্য দেখুন ও আপডেট করুন।
          </p>
        </div>

        <form onSubmit={HandleUserChange} className="space-y-5">
          <div>
            <label
              htmlFor="signup-name"
              className="mb-2 block text-sm font-medium"
            >
              নাম
            </label>

            <input
              id="signup-name"
              type="text"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              আপডেট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
