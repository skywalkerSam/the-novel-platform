"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <>
      <SignedOut>
        <div className="justify-items-end">
          <div className="hover:text-primary p-4 font-lg font-semibold">
            <SignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <nav className="w-screen bg-transparent">
          {" "}
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              {/* <img src="/starboy.svg" className="h-8" alt="Starboy Logo" /> */}
              <span className="hover:text-primary self-center text-2xl font-semibold whitespace-nowrap font-paprika">
                {" "}
                The Novel
              </span>
            </Link>
            <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <UserButton></UserButton>
            </div>
            <div
              className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-user"
            >
              <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
                <li>
                  <Link
                    href="/feed"
                    className="hover:text-primary block rounded-sm px-3 py-2 md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    {/* Home */}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="hover:text-primary block rounded-sm px-3 py-2 md:p-0"
                  >
                    Community
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/search"
                    className="hover:text-primary block rounded-sm px-3 py-2 md:p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    {/* Search */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </SignedIn>
    </>
  );
}
