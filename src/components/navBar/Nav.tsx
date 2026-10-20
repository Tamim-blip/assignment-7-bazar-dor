
"use client";


import { signOut, useSession } from "@/lib/auth-client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const NavBarPage = () => {
  const { data: session } = useSession();

  const [date, setDate] = useState("")

  useEffect(() => {
const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })

      setDate(date)

  },[])


  const [click, setClick] = useState(false)

  const HandleButton = () => {
    setClick(!click)
  }
 
  return (
    <div className="container mx-auto mt-5 flex justify-between items-center">
       <Link href="/">
                <div className="flex gap-3 items-center">
                  <Image
                    className="rounded-2xl bg-green-600 p-2"
                    src="/logo-icon.png"
                    alt="নব দর লোগো"
                    height={50}
                    width={50}
                  />
        
                  <div>
                    <h2 className="text-2xl font-bold">বাজার দর</h2>
                    <p className="text-base-content">{date}</p>
                  </div>
                </div>
              </Link>

      <div>
        {session?.user ? (
      
            
<div className="relative">
  {/* Profile button */}
  <button onClick={HandleButton} className="flex items-center gap-3 cursor-pointer">
    <Image
      src={session.user.image ?? "/profile.png"}
      alt="Profile"
      width={48}
      height={48}
      className="rounded-xl object-cover"
    />
    <span>{session.user.name}</span>
    <span>▾</span>
  </button>

  <div>
    {
      click === true && <div>
        {/* Profile dropdown */}
  <div className="absolute right-0 top-full z-50 mt-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-base-300 bg-base-100 p-6 shadow-xl">
    <h3 className="font-semibold">
      {session.user.name}
    </h3>

    <p className="text-sm opacity-70 break-all">
      {session.user.email}
    </p>

    <Link
      href="/profile"
      className="mt-5 block"
    >
      👤 আমার প্রোফাইল
    </Link>

    <button
      onClick={() => signOut()}
      className="mt-5 text-red-500 cursor-pointer"
    >
      ↩ সাইন আউট
    </button>
  </div>
      </div>
    }
  </div>
</div>

        
        ) : (
          <div className="flex gap-2">
            <Link href="/sign-in">
              <button className="btn">সাইন ইন</button>
            </Link>

            <Link href="/sign-up">
              <button className="btn btn-success">সাইন আপ</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarPage;
