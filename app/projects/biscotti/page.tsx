import { Card } from "@/app/components/card";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function page() {
  const links: { label: string; href: string }[] = [
    {
      label: "Github",
      href: "https://github.com/Bhone-Sithu/Biscotti",
    },
  ];

  return (
    <div className=" bg-zinc-50 min-h-screen">
      <header className=" relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
        <div
          className={`w-full fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 lg:bg-transparent 
                
               "bg-zinc-900/0 border-transparent"
               "bg-white/10  border-zinc-200 lg:border-transparent"
          }`}
        >
          <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
            <div className="flex justify-between gap-8 ">
              {/* <span
                              title="View counter for this page"
                              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                                  isIntersecting
                                      ? " text-zinc-400 hover:text-zinc-100"
                                      : "text-zinc-600 hover:text-zinc-900"
                              } `}
                          >
                              <Eye className="w-5 h-5" />{" "}
                              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                                  views,
                              )}
                          </span> */}
              <Link target="_blank" href="https://twitter.com/chronark_">
                <Twitter
                  className={`w-6 h-6 duration-200 hover:font-medium
                      " text-zinc-400 hover:text-zinc-100"
                       "text-zinc-600 hover:text-zinc-900"
                  } `}
                />
              </Link>
              <Link target="_blank" href="https://github.com/chronark">
                <Github
                  className={`w-6 h-6 duration-200 hover:font-medium 
                      " text-zinc-400 hover:text-zinc-100"
                       "text-zinc-600 hover:text-zinc-900"
                  } `}
                />
              </Link>
            </div>

            <Link
              href="/projects"
              className={`duration-200 hover:font-medium
                
                   " text-zinc-400 hover:text-zinc-100"
                  "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                Biscotti Self Management Application
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                I designed a personal app to optimize my productivity and
                digital habits. It records hour and minute data for different
                tasks, regulates app usage with a math quiz feature, and tracks
                usage time with customizable daily limits. This tailored
                solution empowers efficient time management and fosters a
                healthy balance between productivity and leisure.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <article className="px-4 py-12 ">
        <section className="mx-auto w-8/12">
          <h2 className="text-3xl font-medium">Context</h2>
          <p className=" leading-relaxed my-10">
            This app is designed only for me and my problems. I have a habit of procrastination. In order to get rid of this, I created this app. Users have to add certain apps that are distracting. By using this app, I overcame procrastination up to 60% efficiency.
          </p>
        </section>

        <h1 className="relative my-20 w-full text-center text-3xl duration-1000 cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute -left-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="w-fit mx-auto ">Functions</p>

          <span
            className="lg:absolute -right-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <section id="project-functions" className="">
          <div className="container px-4 my-5 mx-auto">
            <div
                className="grid grid-cols-1 gap-8  sm:mt-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 justify-center items-center">
              <div className="p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span
                    className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Solving Math Problem
                </span>
                <br/>
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Arimethic math problem has to be solved before entering certain application.
                    </li>
                    <li>
                      Math problem increasing its difficult over time.
                    </li>
                    <li>
                      User will feel less and less motivated to go into the app since the difficulty are increasing.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span
                    className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Limit App Usage
                </span>
                <br/>
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      The usage of apps that user added are tracked daily
                    </li>
                    <li>
                      When the usage is over the daily limit, there will be notification and highlighted in the app.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span
                    className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Recording Time
                </span>
                <br/>
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Record Duration of your study or work
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>

        <h1 className="relative my-20 w-full text-center text-3xl ">
          <span
              className="lg:absolute -left-1 z-9 top-4 w-4/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
          />
          <p className="w-fit mx-auto ">Technologies that I used</p>

          <span
              className="lg:absolute -right-1 z-9 top-4 w-4/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
          />
        </h1>
        <section id="project-tech">
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mx-auto sm:mt-0  lg:gap-16">
              <div>
                <span className=" mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className=""
                    src={"/logos/FlutterLogo.png"}
                    alt="JS Logo"
                    width={350}
                    height={350}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Flutter
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/DartLogo.png"}
                    alt="Dart Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Dart
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/SQLiteLogo.png"}
                    alt="SQLite Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  SQLite
                </p>
              </div>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}

export default page;
