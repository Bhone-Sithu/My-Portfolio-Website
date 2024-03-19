"use client";
import { ArrowLeft, MenuSquare, Tally2, Tally3, Tally4, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isHamburger, setHamburger] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 z-20 top-0  duration-200   ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        } ${isHamburger ? "backdrop-blur border-b" : ""}`}
      >
        <Tally4
          id="menu"
          onClick={(event) => {
            setHamburger(false);
          }}
          size={50}
          className={`absolute  z-50 right-0 sm:hidden text-3xl duration-700 cursor-pointer animate text-white my-3 ml-auto mr-8
    ${isHamburger ? "rotate-90" : "rotate-360 scale-0"}`}
        />
        <X
          onClick={(event) => {
            setHamburger(true);
          }}
          id="cross"
          size={50}
          className={`sm:hidden z-40 text-3xl duration-700 cursor-pointer  text-white my-3 ml-auto mr-8 ${
            isHamburger ? "scale-0" : "rotate-180 scale-1"
          }`}
        />
      </div>
      <div
        className={` sm:hidden fixed inset-x-0 top-0 z-10 backdrop-blur  duration-700 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        } ${isHamburger ? "-translate-y-96" : "-translate-y-0"}`}
      >
        <div className=" mt-16 container flex-col items-center justify-between p-6 mx-auto">
          <div className="flex flex-col justify-between items-center gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/experiences"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              Experiences
            </Link>
            <Link
              href="/academic"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              Academic
            </Link>
            <Link
              href="/about"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className=" hidden container sm:flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/experiences"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Experiences
            </Link>
            <Link
              href="/academic"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Academic
            </Link>
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div
        className={` fixed inset-x-0 top-0 z-10 backdrop-blur  duration-700 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className=" hidden container sm:flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/experiences"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Experiences
            </Link>
            <Link
              href="/academic"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Academic
            </Link>
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
