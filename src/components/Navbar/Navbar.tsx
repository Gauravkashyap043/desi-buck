// import Link from "next/link";
"use client";
import React, { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FaSearch, FaRegHeart, FaHeart, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  console.log(session);

  return (
    <nav className="w-full h-[120px] m-auto bg-white">
      <div className="w-[75%] m-auto h-full flex justify-between items-center">
        <div className="">
          <Image src="" alt="this is logo" className="cursor-pointer" />
        </div>
        <div className="w-[21rem] m-auto  border flex items-center gap-2 rounded-full py-[12px] px-[21px]">
          <div>
            <FaSearch color="gray" />
          </div>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="flex-1 px-2 outline-none cursor-auto bg-transparent"
          />
        </div>
        <div className="flex gap-3 px-1 items-center ">
          <FaRegHeart color="gray" size={23} className="cursor-pointer" />
          <div
            className="relative w-[50px] h-[50px] rounded-full flex justify-center items-center"
            onClick={() => setShowLogin(!showLogin)}
          >
            {!session ? (
              <FaRegUser color="gray" size={23} className="cursor-pointer" />
            ) : (
              <img
                src={session?.user?.image || ""}
                alt=""
                className="w-full h-full rounded-full"
              />
            )}

            {showLogin && (
              <div className="absolute border w-[221px] h-[114px] top-10 right-0 flex justify-center items-center bg-white rounded-lg">
                {session ? (
                  <button
                    className="w-[150px] h-[30px] border rounded-full text-sm"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="w-[150px] h-[30px] border rounded-full text-sm"
                    onClick={() => signIn('google',callbackUrl)}
                  >
                    Login with Google
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
