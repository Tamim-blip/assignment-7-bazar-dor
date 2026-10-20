
"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBarPage = () => {
  const { data: session } = useSession();

  const [date, setDate] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    const date = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(date);
  }, []);

  const HandleButton = () => {
    setClick(!click);
  };

  return (
    <div className="container mx-auto mt-3 sm:mt-5 w-full px-3 sm:px-4">
      <div className="flex justify-between items-center gap-3">

        {/* Logo and Website Name */}
        <Link href="/" className="min-w-0">
          <div className="flex gap-2 sm:gap-3 items-center">
            <Image
              className="rounded-xl sm:rounded-2xl bg-green-600 p-1.5 sm:p-2 shrink-0"
              src="/logo-icon.png"
              alt="নব দর লোগো"
              height={50}
              width={50}
            />

            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold">
                বাজার দর
              </h2>

              <p className="text-xs sm:text-sm text-base-content">
                {date}
              </p>
            </div>
          </div>
        </Link>

        {/* Authentication */}
        <div className="shrink-0">
          {session?.user ? (
            <div className="relative">

              {/* Profile Button */}
              <button
                onClick={HandleButton}
                className="flex items-center gap-1.5 sm:gap-3 cursor-pointer"
              >
                <Image
                  src={session.user.image ?? "/profile.png"}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl object-cover shrink-0"
                />

                <span className="hidden sm:inline max-w-32 truncate font-medium">
                  {session.user.name}
                </span>

                <span className="text-sm">▾</span>
              </button>

              {/* Profile Dropdown */}
              {click && (
                <div className="absolute right-0 top-full z-50 mt-3 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-base-300 bg-base-100 p-4 sm:p-6 shadow-xl">

                  <h3 className="font-semibold wrap-break-word">
                    {session.user.name}
                  </h3>

                  <p className="text-sm opacity-70 break-all mt-1">
                    {session.user.email}
                  </p>

                  <Link
                    href="/profile"
                    onClick={() => setClick(false)}
                    className="mt-5 block rounded-lg py-2 transition hover:bg-base-200"
                  >
                    👤 আমার প্রোফাইল
                  </Link>

                  <button
                    onClick={() => signOut()}
                    className="mt-3 text-red-500 cursor-pointer"
                  >
                    ↩ সাইন আউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/sign-in">
                <button className="btn btn-sm sm:btn-md">
                  সাইন ইন
                </button>
              </Link>

              <Link href="/sign-up">
                <button className="btn btn-success btn-sm sm:btn-md">
                  সাইন আপ
                </button>
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default NavBarPage;
